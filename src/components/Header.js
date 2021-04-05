import React from 'react';

export default function Header() {
    return (
        <React.Fragment>
            <div className="p-d-flex p-jc-center p-pb-4 p-ai-baseline">
                <text style={{fontSize: '55px', font: 'arial', alignContent:'center' }}>Cook</text>
                <text style={{fontSize: '65px', font: 'arial', alignContent:'center', color:'dodgerblue'}}>IT</text>
            </div>
        </React.Fragment>
    );
}