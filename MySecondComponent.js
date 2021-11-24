//normal declation for function
// function MySecondComponent() {
//     return <h2>I am inside MySecondComponent</h2>;
//   }
//   export default MySecondComponent;


    //efficient way to declare function with export as well(arrow function type declaration)
    
    export default (props) => { 
      // console.log(props.name); 
      // console.log(props.age);
      const{name, age, children}=props;      //passing props here (by using object Destructuring)                  
    
      return (
      <>
      <h2>I am {name}, I am {age} yrs old, I am inside MySecondComponent</h2>
    {children}
    </>
      );
  };                            