define(
    [
        'react',
        '../custom-box/box',
        './table',
        '../progress-bar/progress-bar'
    ],
    function (React, Box, Table, ProgressBar) {


        var TableBox = React.createClass({
            getInitialState: function () {
                return {
                    tools: [],
                    text: [],
                }
            },

            componentDidMount: function () {
                var tools = [];

                if (this.props.collapsable)
                    tools.push('collapse');

                if (this.props.closable)
                    tools.push('remove');


                this.setState({
                    tools: this.state.tools.concat(tools),
                    title: this.props.title,
                    tabletitle: this.props.tabletitle,
                    width: this.props.width,
                    theme: this.props.theme,
                    footer: this.props.footer,
                    rows: this.props.rows,
                    header: this.props.header,
                });

            },



            render: function () {
                var that = this;

                var content = (
                    <Table title={that.state.tabletitle} rows={that.props.rows} header={that.props.header} chooser="true" chooserType='radio'/>
                );

                return (
                    <Box
                        title = {that.state.title}
                        width = {that.state.width}
                        theme = {that.state.theme}
                        border = {that.state.border}
                        boxTools = {that.state.tools}
                        content = {content}
                        footer = {that.state.footer}
                    />
                )
            }
        });

        return TableBox;
    }
)