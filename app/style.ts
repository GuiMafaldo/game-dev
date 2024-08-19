import  styled  from "styled-components";

export const BackgroundGame = styled.div`
  max-width: 960px;
  width: 100%;
  background-color: #000;
  margin: 0 auto;
  margin-top: 80px;
  padding: 200px;
  padding-bottom: 220px;
  border-radius: 15%;

  @media (min-width: 360px) and (max-width: 767px) {
    width: 90vw;
    height: 100vh;
    border-radius: 10px;
  }
`

export const ContentContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: 50vh;
  flex-direction: column;
  padding: 10px;


  @media (min-width: 360px) and (max-width: 767px) {
    width: 80vw;
    height: 90vh;
    padding-top: 60px;
    margin: 0 auto;
    margin-left: -175px;
    margin-top: -140px;
  }

  & .title-and-sub {
      margin-top: -80px;
      
      h1{
        text-align: center;
        font-size: 2.5em;
        font-family: Helvetica;
        color: orange;
        margin-bottom: 60px;
      }

      h3 {
        text-align: center;
        font-size: 1.6em;
        color: orange;
        margin-bottom: 60px;
      }

      @media (min-width: 360px) and (max-width: 767px) {
        margin-left: 0;
        margin-bottom: 0;

       > h1 {
           text-align: center;
            font-size: 1.8em;
            margin-bottom: 30px;
        }
        > h3 {
          font-size: 1.1em;
        }
      }
    }

    }
      & .questionsContent {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 20px;
            
         > h3 {
            text-align: center;
            color: #fff;
            margin-bottom: 10px;
         }

          & .input-questions {
            color: #fff;
            text-align: center;

            > h4 {
              margin-bottom: 45px; 
            }

            input {
              height: 20px;
              margin-left: 30px;
              margin-right: 20px;
              cursor: pointer;
            }

            button {
              width: 100px;
              padding: 12px;
              border: none;
              border-radius: 12px;
              cursor: pointer;
              font-weight: 700;
              font-family: Helvetica;

              &: hover {
                color: #fff;
                background-color: orange;
                font-weight: 700;
                font-family: Helvetica;
              }
            }

            & .help-buttons{
                gap: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                margin-top: -30px;
                margin-bottom: 30px;

                > button {
                    width: 120px;
                    height: 40px;
                    padding: 6px; 
                }

                @media (min-width: 360px) and (max-width: 767px){
                  margin-top: -65px;
                }
                
            }


            @media (min-width: 360px) and (max-width: 767px) {
                 display: block;

                 & .help-buttons{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 30px;

                    > button {
                      padding: 6px; 
                    }
                 }

                 btn-submmit{ 
                  height: 40px;
                  margin-top: 30px;
                    
                 }
              }


        & .questions {
            display: flex;
            align-items: center;
            justify-content: center;
            justify-content: space-space-between;
            margin-bottom: 60px;

          @media (min-width: 360px) and (max-width: 767px) {
                 display: block;
              }

          & .span-color {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
              
            span {
                background-color: rgba(173, 216, 230, 0.25);
                padding: 16px;
                border-radius: 14px;
                cursor: pointer;

                &: hover {
                  background-color: orange;
                  color: #000;
                  font-weight: 700;
                }
                }
                
                @media (min-width: 360px) and (max-width: 767px) {
                  display: flex;
                  align-items: center;
                    margin-top: 20px;
                    text-align: left;
                    > span {
                      width: 100vw; 
                    }
                    
                }
          }
        }
      }
`