import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class DatePicker extends React.Component {
    static defaultProps = {
        numberOfMonths: 2,
    };

    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            from: undefined,
            to: undefined,
        };
    }

    shouldComponentUpdate(nextProps) {
        const diffCustom = this.props.isCustom;
        const diffTo = this.props.to !== nextProps.to;
        const diffFrom = this.props.from !== nextProps.from;
        return diffCustom || diffTo || diffFrom
    }


    handleDayClick(day) {
        if (this.validateIsFuture(day)) {
            alert('Future dates can not be selected')
        } else if (this.validateTodaysDate(day)) {
            alert('Today\'s date can not be selected')
        } else {
            const range = DateUtils.addDayToRange(day, this.state);
            if (range.from && range.to) {
                this.props.selectedRange(range)
                return (this.monthDiff(new Date(range.from), new Date(range.to))) ?
                    alert('Maximum time range is 6 months') : this.setState(range);
            }
            this.setState(range);

        }
    }

    validateIsFuture(day) {
        const isFutureDay = DateUtils.isFutureDay(day)
        return isFutureDay
    }



    validateTodaysDate(day) {
        let dt = new Date(day).getDate()
        return dt === new Date().getDate()
    }

    monthDiff(d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth() + 1;
        months += d2.getMonth();
        return months > 6
    }

    render() {

        const {from, to} = (this.props.isCustom) ? this.state: this.props
        const modifiers = {start: from, end: to};
        return (
            <div className="range">
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, {from, to}]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
                <Helmet>
                    <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #37B04C;
  }
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: #37B04C
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .DayPicker-Months {
    flex-wrap: nowrap
  }
`}</style>
                </Helmet>
            </div>
        );
    }
}
