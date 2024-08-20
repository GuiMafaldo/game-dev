import  styled  from "styled-components";

export const BackgroundGame = styled.div`
  max-width: 960px;
  width: 100%;
  background-color: #495057;
  margin: 0 auto;
  margin-top: 80px;
  padding: 200px;
  padding-bottom: 220px;
  border-radius: 15%;

  @media (min-width: 360px) and (max-width: 767px) {
    width: 90vw;
    height: 100vh;
    margin-top: 8px;
    margin-bottom: 30px;
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
    height: 100vh;
    padding-top: 60px;

    margin: 0 auto;
    margin-left: -175px;
    margin-top: -140px;
  }

  & .title-and-sub {
      margin-top: -80px;

      & .title-and-image {
        display: flex;
        align-items: center;

        & .image {
          margin-top: -60px;
        }
      }
      
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
        margin-left: 10px;

       & .title-and-image {
        > h1 {
           text-align: center;
            font-size: 1.8em;
            margin-bottom: 30px;
        }

         & .image {
            width: 60px;
            height: 60px;
            margin-top: -30px;
            margin-left: 20px;
         }
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
            align-items: center;
            color: #fff;
            text-align: center;

            > h4 {
              margin-bottom: 30px; 
            }

            & .questions {
                & .span-color {
                  
                  & #option-select {
                      border-radius: 20px;
                      width: 40px;
                      height: 40px;
                      margin: 12px 4px 0 24px;
                      font-weight: 700;
                      font-family: Helvetica;
                      text-transform: uppercase;

                      @media(min-width: 360px) and (max-width: 767px){
                          margin-top: -10px;
                          margin-left: -10px;
                      }
                    }
                  }
                }
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

                // @media (min-width: 360px) and (max-width: 767px){
                //     margin-top: -20px;
                // }
                
            }


            @media (min-width: 360px) and (max-width: 767px) {
                 display: flex;
                  margin-top: -40px;

                 & .help-buttons{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    > button {
                      margin-top:-90px;
                      padding: 6px; 
                    }
                 }

                 & .btn-submmit{ 
                  height: 40px;
                  margin-top: -40px;
                  margin-bottom: 130px
                  
                    
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