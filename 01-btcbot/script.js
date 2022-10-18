//Muhammet Furkan Ayhan
async function getBTC() {
  let url = "users.json";
  try {
    let res = await fetch(
      new Request("https://api.livecoinwatch.com/coins/single"),
      {
        method: "POST",
        headers: new Headers({
          "content-type": "application/json",
          "x-api-key": "9daadafb-f246-488c-a308-279c64edf762",
        }),
        body: JSON.stringify({
          currency: "USD",
          code: "BTC",
          meta: true,
        }),
      }
    );

    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function setBtcValue(elementSelector)  {
  let btc = await getBTC(); 
  let element = document.querySelector(elementSelector);
  element.innerHTML = btc.rate.toFixed(2);
}

 
  