import React, {Component} from 'react';
import moment from 'moment';
// import './styles.css';

class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: {
                months: '00',
                days: '00',
                h: '00',
                m: '00',
                s: '00',
                interval: function () {

                }
            },
            startDate: new moment(),
            min: new Date(),
            startTimer: false
        }
        this.tick = this.tick.bind(this);
    }
    componentDidMount() {
        this.state.interval = setInterval(this.tick, 1000)
    }
    componentWillUnmount() {
        this.state.interval && clearInterval(this.state.interval);
    }

    tick() {
        if (typeof this.props.endDate  === typeof new Date()) {
            this.afterEachSecond(this.props.endDate);
        } else {
        }
    }
    afterEachSecond(endDate){
        var temp = {months: '', days: '', h: '', m: '', s: ''};
        var now = moment(); // today's date
        var end = moment(endDate); // end date
        var duration = moment.duration(end.diff(now));
        if (Math.floor(duration.asMonths()) < 10) { temp.months = '0'+ Math.floor(duration.asMonths())} else {temp.months = Math.floor(duration.asMonths())}
        if (Math.floor(duration.days()) < 10) { temp.days = '0'+ Math.floor(duration.days())} else {temp.days = Math.floor(duration.days())}
        if (Math.floor(duration.hours()) < 10) { temp.h = '0'+ Math.floor(duration.hours())} else {temp.h = Math.floor(duration.hours())}
        if (Math.floor(duration.minutes()) < 10) { temp.m = '0'+ Math.floor(duration.minutes())} else {temp.m = Math.floor(duration.minutes())}
        if (Math.floor(duration.seconds()) < 10) { temp.s = '0'+ Math.floor(duration.seconds())} else {temp.s = Math.floor(duration.seconds())}

        this.setState({
            timeRemaining: temp
        })
    }
    render() {
        const timer = {
            display: 'flex',
            justifyContent: 'space-around'
        };
        const time = {
            color: 'white',
            fontSize: '74px',
        }
        const label = {
            fontSize: '22px',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'white',
            minWidth: 'inherit',
            color: '#000',
            fontWeight: '100',
        }
        const section = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '100px',
            minHeight: '100px',
            backgroundColor: 'black',
            borderRadius: '7px',
    }
        return (
            <div style={timer}>
                <div style={section}>
                    <div className="time" style={time}>{this.state.timeRemaining.months}</div>
                    <div className="label" style={label}>Months</div>
                </div>
                <div style={section} className="section">
                    <div className="time" style={time}>{this.state.timeRemaining.days}</div>
                    <div className="label" style={label}>Days</div>
                </div>
                <div className="section" style={section}>
                    <div className="time" style={time}>{this.state.timeRemaining.h}</div>
                    <div className="label" style={label}>Hours</div>
                </div>
                <div className="section" style={section}>
                    <div className="time" style={time}>{this.state.timeRemaining.m}</div>
                    <div className="label" style={label}>Minutes</div>
                </div>
                <div className="section" style={section}>
                    <div className="time" style={time}>{this.state.timeRemaining.s}</div>
                    <div className="label" style={label}>Seconds</div>
                </div>
            </div>
        )
    }
}

export default CountdownTimer;
