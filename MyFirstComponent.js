function MyFirstComponent(props) {
  // console.log(props.name); 
  // console.log(props.age);
  const{name, age, children}=props;  //passing props here (by using object Destructuring)
  return(
      <>
   <h2>I am {name}, I am {age} yrs old, I am inside MyFirstComponent</h2>
     {children}  
     </>  
  );
};
export default MyFirstComponent;
