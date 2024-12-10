function waitTwoSeconds(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Done waiting!');
      // reject(new Error('Done waiting! There was an error!'));
    }, 2000);
  });
}

// waitTwoSeconds()
//   .then((message) => console.log(message))
//   .catch((error) => console.error('Error:', error));

async function performWait(): Promise<void> {
  try {
    const message = await waitTwoSeconds();
    console.log(message);
  } catch (error) {
    console.log('Error:', error);
  }
}
performWait();
