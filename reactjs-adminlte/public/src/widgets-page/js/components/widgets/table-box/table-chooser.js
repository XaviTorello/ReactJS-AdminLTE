define(
    [
        'react',
        '../../form-elements/radiobutton',
    ],
    function (React, RadioButton) {


        var TableChooser = React.createClass({
            getInitialState: function () {
                return {
                    options: [],
                    selected: [],
                    title: "",
                    type: "",
                    width: null,
                    theme: "",
                    parentID: "",
                }
            },

            componentDidMount: function () {
                var chooserType = null;

                switch (this.props.type) {
                    default:
                    case "radio":
                        chooserType = "radio";
                        break;
                    case "check":
                        chooserType = "checkbox";
                        break;

                }

                if (this.props.closable)
                    tools.push('remove');


                var selected = this.props.selected;

                //select last option if not defined or badly defined
                if (typeof(selected)==undefined || !( (selected > 0) && (selected < this.props.options.length) )){
                    selected = this.props.options.length -1;
                }

                this.setState({
                    options: this.props.options,
                    selected: selected,
                    title: this.props.title,
                    type: chooserType,
                    width: this.props.width,
                    theme: this.props.theme,
                    parentID: this.props.parentID,
                });

            },


            handleChange: function(event) {

                //trigger parent onChange
                if (typeof this.props.onChange === 'function') {
                    this.props.onChange(event);
                }

                //reach id of selected option
                var numberSelected = this.state.options.indexOf(event);

                //save selectedID and wait to re-render
                this.setState({
                    selected: numberSelected
                });

            },

            render: function () {
                var that = this;

                var elements = that.state.options.map(function (entry, idx) {
                    var activated = "";

                    if (idx == that.state.selected)
                        activated = "checked";


                    return (
                       <RadioButton key={idx} type={that.state.type} name={"chooser_" + that.state.parentID} value={entry} checked={activated} onChange={that.handleChange} />
                    );

                })


                return (
                    <form >
                        <div id={"div_chooser_"+ that.props.parentID} className="form-group pull-right">
                            {elements}
                        </div>
                    </form>
                )
            }
        });

        return TableChooser;
    }
)