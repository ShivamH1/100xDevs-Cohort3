//real wrapper
function Card() {
  return (
    <div>
      <CardWrapper>Hi there</CardWrapper>
      <CardWrapper>Hey</CardWrapper>
      <CardWrapper>Hello</CardWrapper>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
    </div>
  );
}

function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
      {children}
    </div>
  );
}

function TextComponent() {
  return <div>hi there</div>;
}

//wrapper component
// function Card(){
//     return (
//         <div>
//             <CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
//             <CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
//         </div>
//     )
// }

// function TextComponent(){
//     return <div>
//         hi there
//     </div>
// }

// function CardWrapper(props){
//     return <div style={
//         {border : "2px solid black", padding : "10px", margin : "10px"}
//     }>
//         {props.innerComponent}
//     </div>
// }

export default Card;
