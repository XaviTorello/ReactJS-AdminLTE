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


            render: function () {
                var that = this;

                return (
                   <InputGeneric key={that.id} type="radio" name={that.props.name} value={that.props.value} checked={this.props.checked} onChange={that.toggleChange} />
                );

            }
        });

        return RadioButton;
    }
)