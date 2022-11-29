import React from "react";
import Notification from "./Notification";

const reserveNotifications = [
  {
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
    seq: 1,
  },
  {
    message: "지금은 점심시간입니다.",
    seq: 2,
  },
  {
    message: "이제 곧 회의를 시작합니다.",
    seq: 3,
  },
]

let timer

class NotificationList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notifications: [],
    }
  }

  componentDidMount() {
    let { notifications } = this.state
    timer = setInterval(() => {
      if (notifications.length < reserveNotifications.length) {
        let index = notifications.length
        notifications.push(reserveNotifications[index])
        this.setState({
          notifications: notifications,
        })
      } else {
        notifications = []
        this.setState({
          notifications: [],
        })
        clearInterval(timer)
      }
    }, 1000)
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return <Notification message={notification.message} seq={notification.seq} key={notification.seq} />
        })}
      </div>
    )
  }
}

export default NotificationList;