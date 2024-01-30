import './style.scss'
import {isNumber, isTruly, notRepeated, notice, sortNumberList, sortStringList, appendInput} from './src/utils.js'

// get input value and button element
const input = document.querySelector("#input")
const button = document.querySelector(".button")

// get table elements
const numberTable = document.querySelector(".numberTable")
const stringTable = document.querySelector(".stringTable")
const numberTbody = numberTable.querySelector(".numberTbody")
const stringTbody = stringTable.querySelector(".stringTbody")

// when clicking the button
let numberList = []
let stringList = []

button.addEventListener("click", ()=> {

  let value = input.value
  let isRepeated = false

  if (isTruly(value)) {
    if (isNumber(+value)) {
      if (notRepeated(+value,numberList)) {
        numberList.push(+value)
        sortNumberList(numberList)
      } else {
        isRepeated = true
      }
    } else {
      if (notRepeated(value,stringList)) {
        stringList.push(value)
        sortStringList(stringList)
      } else {
        isRepeated = true
      }
    }
  }

  input.value = ""
  notice(+value,isRepeated)
  
  let sortStrings = sortStringList(stringList)
  appendInput(numberList,numberTbody)
  appendInput(sortStrings,stringTbody)
})









