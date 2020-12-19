import React from 'react';

function TestImage(){
    return(
        <div style={{margin:"auto",width:"30%",height:"30%"}}>
        <img style={{width:"100%", height:"100%",objectFit:"cover"}} src="https://i.imgur.com/xhuK17d.jpg" />
        </div>
    );

};

export default TestImage;