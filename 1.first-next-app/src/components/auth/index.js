export const createUser = async (values) => {
  console.log("🚀 ~ createUser ~ values:", values);
  // Simulate a network request
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (values.email === "error@example.com") {
        reject(new Error("Simulated error"));
      } else {
        resolve();
      }
    }, 2000);
  });
};
