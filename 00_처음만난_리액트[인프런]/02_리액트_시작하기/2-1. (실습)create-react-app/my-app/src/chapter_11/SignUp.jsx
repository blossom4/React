import React, { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState('')
  const [option, setOption] = useState('')

  const handleInput = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    if (name == '') {
      alert('이름을 입력해 주세요.')
      return
    } else if (option == '') {
      alert('성별을 선택해 주세요.')
      return
    }

    alert(`${name} 님 제출완료 되었습니다. ( ${option} )`)
    event.preventDefault()
    setName('')
    setOption('')
  }

  const container = {
      paddingLeft: 15,
      paddingTop: 15,
  }

  return (
    <>
      <form style={container} onSubmit={handleSubmit}>
        <h2>이름을 입력해 주세요.</h2>
        <input type="text" value={name} onChange={handleInput} />
        <br/>
        <h2>성별을 선택해 주세요.</h2>
        <select key={option} defaultValue={option} onChange={(event) => {setOption(event.target.value)}}>
          <option value="">선택</option>
          <option value="male">M</option>
          <option value="female">F</option>
        </select>
        <hr/>
        <button type="submit">제출</button>
      </form>
    </>
  )
}

export default SignUp;