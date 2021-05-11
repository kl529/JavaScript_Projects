/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, useRef } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {

    const {
      target: {value}
    } = event;

    let willUpdate = true;

    if(typeof validator === "function"){ //validator가 function이면 조건을 달아줌
      willUpdate = validator(value);
    }

    if(willUpdate){
      setValue(value);
    }

  };
  return {value, onChange};
};

const content = [
  {
    tab:"Section 1",
    content: "i'm the content of the Section 1"
  },
  {
    tab:"Section 2",
    content: "i'm the content of the Section 2"
  },

]

const useTabs = (initialTab, allTabs) => {

  const [currentIndex, setcurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) { //alltab에 제대로 안들어오면 종료 == 배열이 아닐때
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem : setcurrentIndex,
  };

};

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () =>{
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle,[title]);
  return setTitle;
}

const useClick = onClick =>{
  const element = useRef();
  useEffect(() =>{
    if (element.current){
      element.current.addEventListener("click", onClick);
    }
    return ()=>{
      if (element.current){
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const useConfirm = (message="", onConfirm, onCancel)=>{
  if (!onConfirm || typeof callback !== "function"){
    return;
  }
  if (onCancel || typeof callback !== "function"){
    return;
  }
  const confirmAction= () =>{
    if (confirm(message)){
      onConfirm();
    }else{
      onCancel();
    }
  };
  return confirmAction;
}

const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);
  return {enablePrevent,disablePrevent};
};

const useBeforeLeave = onBefore => {
  if (typeof onBefore !== "function"){
    return;
  }
  const handle = (event) => {
    const {clientY} = event;
    if(clientY <= 0){
      onBefore();
    }

  };
  useEffect(() => {
    document.addEventListener("mouseleave",handle);
    return () => document.removeEventListener("moveleave",handle)
  }, []);
};

const useFadeIn = (duration =1, delay = 0) =>{
  if (typeof duration !== "number" || typeof delay !== "number"){
    return;
  }
  const element = useRef();
  useEffect(()=>{
    if(element.current){
      const {current} = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
      current.style.backgroundColor = "red";
    }

  }, []);

  return {ref : element, sytle: {opacity:0}};
};


const App = () => {
  const el = useFadeIn(1,2);
  const el2 = useFadeIn(5,10);
  return (
    <div className="App">
      <h1 {...el}>hello</h1>
      <h3 {...el2}>asdgsdgsdgsdgsd</h3>
    </div>
  );

};

export default App;