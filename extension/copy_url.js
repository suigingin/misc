const deleteText =
  " | 侍テラコヤ - 日本最安級のサブスク型プログラミングスクール";
const title = document.title.replace(deleteText, "");
const url = location.href;
const copiedText = "[" + title + "](" + url + ")";
if (navigator.clipboard) {
  navigator.clipboard.writeText(copiedText).then(
    () => {
      console.log("copied.");
    },
    () => {
      console.log("clipboard denied.");
      alert("clipboard denied.");
    }
  );
}
