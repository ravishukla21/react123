export default function AddButton(props){
    const {text,hello}=props;
    //console.log(hello)
    return(
        <>

        <button style={{background:hello}}>{text}</button>
        
        </>
    )
}