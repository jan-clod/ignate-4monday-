import React from 'react'
import Message from './Message'
import { type } from 'os'


function HW1() {
    
    return (
        <>
            <div>


                {/* {should work} */}

                <Message
                    avatar={'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg'}
                    name={'saha'}
                    message={'hello world'}
                    time={'22:00'}
                />
                {/* {<AlternativeMessage />} */}

                
            </div>

            
        </>
    )
}

export default HW1
