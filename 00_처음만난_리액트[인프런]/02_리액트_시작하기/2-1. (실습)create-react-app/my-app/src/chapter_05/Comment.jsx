import React from "react";

const styles ={
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
}

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img 
          src="https://camo.githubusercontent.com/25ced01cd986faca82828468973f0016e2fa0508b2b66b0ddecb6ad195f43518/68747470733a2f2f706f737466696c65732e707374617469632e6e65742f4d6a41794d6a45784d6a6c664d5445312f4d4441784e6a59354e6a67334d7a41344d7a49332e4c4f64554c754930416a6a4f32414e413055514b4f7537635076577a49735f6e55745848714c77677a4155672e49506b4d6b6f6456494c523854644f5045327a7a6d59616461555732546d7052644a39555a31386b557345672e4a5045472e616c7465726e6174697665332f2545422539442541302545422541412541382545432539412542302e6a70673f747970653d77353830"
          style={styles.image}
        />
      </div>

      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  )
}

export default Comment;