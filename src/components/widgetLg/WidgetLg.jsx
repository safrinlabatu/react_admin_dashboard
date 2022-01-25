import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transactions</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="wigetLgUser">
              <img src="https://media.istockphoto.com/photos/portrait-of-cheerful-attractive-indian-young-women-in-business-were-picture-id1315983936?b=1&k=20&m=1315983936&s=170667a&w=0&h=5EMnnJG30y5bb_LqMnyX1zyorGZ01Q7tNLBQ7YndN9U=" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Imelda Kasvani</span>
            </td>
            <td className="widgetLgDate">Jan 23, 2022</td>
            <td className="widgetLgAmount">$250.00</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="wigetLgUser">
              <img src="https://media.istockphoto.com/photos/portrait-of-cheerful-attractive-indian-young-women-in-business-were-picture-id1315983936?b=1&k=20&m=1315983936&s=170667a&w=0&h=5EMnnJG30y5bb_LqMnyX1zyorGZ01Q7tNLBQ7YndN9U=" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Imelda Kasvani</span>
            </td>
            <td className="widgetLgDate">Jan 23, 2022</td>
            <td className="widgetLgAmount">$250.00</td>
            <td className="widgetLgStatus"><Button type="Declined"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="wigetLgUser">
              <img src="https://media.istockphoto.com/photos/portrait-of-cheerful-attractive-indian-young-women-in-business-were-picture-id1315983936?b=1&k=20&m=1315983936&s=170667a&w=0&h=5EMnnJG30y5bb_LqMnyX1zyorGZ01Q7tNLBQ7YndN9U=" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Imelda Kasvani</span>
            </td>
            <td className="widgetLgDate">Jan 23, 2022</td>
            <td className="widgetLgAmount">$250.00</td>
            <td className="widgetLgStatus"><Button type="Pending"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="wigetLgUser">
              <img src="https://media.istockphoto.com/photos/portrait-of-cheerful-attractive-indian-young-women-in-business-were-picture-id1315983936?b=1&k=20&m=1315983936&s=170667a&w=0&h=5EMnnJG30y5bb_LqMnyX1zyorGZ01Q7tNLBQ7YndN9U=" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Imelda Kasvani</span>
            </td>
            <td className="widgetLgDate">Jan 23, 2022</td>
            <td className="widgetLgAmount">$250.00</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr>
        </table>
    </div>
  )
}
