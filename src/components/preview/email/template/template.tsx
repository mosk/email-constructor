import { FC } from "react";
import { useSelector } from "react-redux";
import EmailContainer from "../container/container";

const EmailStructure: FC = () => {
  const emailWidth = useSelector((state: any) => state.emailSettings.width);
  const preheader = useSelector((state: any) => state.emailSettings.preheader);

  // useEffect(() => {
  //   console.log(emailWidth);
  // }, [emailWidth]);

  // const tdStyle = {
  //   padding: 0,
  //   paddingTop: 0,
  //   paddingBottom: 0,
  //   paddingLeft: '6%',
  //   paddingRight: '6%',
  //   textAlign: 'center',
  // };

  return (
    <>
      <div
        className="preheader preheader--text"
        style={{
          height: "0px",
          margin: "0 auto",
          padding: "0",
          fontSize: "0px",
          color: "transparent",
          opacity: "0",
        }}
      >
        {preheader}
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      </div>
      <div
        className="preheader preheader--empty"
        style={{
          height: "0px",
          margin: "0 auto",
          padding: "0",
          fontSize: "0px",
          color: "transparent",
          opacity: "0",
        }}
      >
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      </div>
      <table className="wrapper" width="100%" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr className="row" style={{ textAlign: "center" }}>
            <td className="row__td" />
            <td
              className="container"
              width={emailWidth}
              style={{
                maxWidth: `${emailWidth}px`,
                margin: "0 auto",
                padding: "0",
              }}
            >
              <div
                style={{
                  display: "block",
                  width: "100%",
                  maxWidth: `${emailWidth}px`,
                  margin: "0 auto",
                  padding: "0",
                }}
              >
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  width="100%"
                  style={{
                    maxWidth: `${emailWidth}px`,
                    margin: "0 auto",
                    padding: "0",
                  }}
                >
                  <tbody>
                    <tr style={{ textAlign: "center" }}>
                      <td style={{ padding: "0" }}>
                        <EmailContainer />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
            <td className="row__td" />
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default EmailStructure;
