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


                var selected = Number(this.props.selected);

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

            toggleChange: function() {
                console.dir(this);

            },

            render: function () {
                var that = this;

                var elements = that.state.options.map(function (entry, idx) {
                    var activated = null;

                    if (idx == that.state.selected)
                        activated = "checked";
/*
                    return (
                       <label key={idx}>
                       <input key={entry.id} type={that.state.type} name={that.state.parentID} value={entry} checked={activated} onClick={that.toggleChange} />
                           xx{entry}
                       </label>
                    );
*/

                    return (
                       <RadioButton key={entry.id} type={that.state.type} name={that.state.parentID} value={entry} checked={activated} />
                    );

                })


                return (
                    <form>
                        <div className="form-group pull-right">
                            {elements}
                        </div>
                    </form>
                )
            }
        });

        return TableChooser;
    }
)