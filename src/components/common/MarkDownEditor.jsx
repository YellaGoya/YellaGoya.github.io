import * as r from "react";
import firebase from "modules/FirebaseTest.js";
import ReactMarkdown from "react-markdown";

const MarkDownEditor = () => {
  const [text, setText] = r.useState("");

  r.useEffect(() => {
    const db = firebase.database();
    const textareaRef = db.ref("textarea");

    // 데이터베이스에서 마운트 시점의 데이터를 가져옴
    textareaRef.on("value", (snapshot) => {
      const data = snapshot.val();
      setText(data);
    });

    // 컴포넌트 언마운트 시점에 이벤트 리스너 제거
    return () => {
      textareaRef.off();
    };
  }, []);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);

    // 입력 값이 변경될 때마다 실시간 데이터베이스에 반영
    firebase.database().ref("textarea").set(value);
  }

  return (
    <>
      <textarea value={text} onChange={handleChange} />
      <ReactMarkdown>{text}</ReactMarkdown>
    </>
  );
};

export default MarkDownEditor;
