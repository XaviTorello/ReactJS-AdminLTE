define(
    [
        'react',
        './input-generic',
    ],
    function (React, InputGeneric) {

        var RadioButton = React.createClass({
            getInitialState: function () {
                return {
                };
            },

            handleChange: function(event) {
                //trigger parent onChange
                if (typeof this.props.onChange === 'function') {
                    this.props.onChange(event);
                }
            },

            render: function () {
                var that = this;

                return (
                   <InputGeneric key={that.id} type="radio" name={that.props.name} value={that.props.value} checked={this.props.checked} onChange={that.handleChange} />
                );

            }
        });

        return RadioButton;
    }
)