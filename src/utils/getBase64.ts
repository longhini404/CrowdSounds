const getBase64 = (file: File) => {
  if (file.size === 0) return;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      //@ts-ignore
      let encoded = reader!.result!.replace(/^data:(.*;base64,)?/, "");
      if (encoded.length % 4 > 0) {
        encoded += "=".repeat(4 - (encoded.length % 4));
      }
      resolve(encoded);
    };
    reader.onerror = (error) => reject(error);
  });
};

export default getBase64;
