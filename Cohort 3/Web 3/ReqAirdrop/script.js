const { Connection, Keypair } = solanaWeb3;

function submitForm() {
  var solanaPublicKey = documentgetElementById("address").value;
  const connection = new Connection("https://api.devnet.solana.com");
  let PublicKeyObj = new PublicKey(solanaPublicKey);

  const fn = async () => {
    let txhash = await connection.requestAirdrop(feePayer.publicKey, 1e9);
    console.log(`txhash: ${txhash}`);

    const inputText = document.getElementById("address").value;
    alert("You Entered: ",inputText);
  };
  fn();
}
