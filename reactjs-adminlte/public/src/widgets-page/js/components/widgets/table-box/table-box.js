define(
    [
        'react',
        '../custom-box/box',
        './table',
    ],
    function (React, Box, Table) {


        var TableBox = React.createClass({
            getInitialState: function () {
                return {
                    tools: [],
                    text: [],
                }
            },

            componentWillMount: function () {
                var tools = [];

                if (this.props.collapsable)
                    tools.push('collapse');

                if (this.props.closable)
                    tools.push('remove');


                this.setState({
                    tools: this.state.tools.concat(tools),
                    id: this.props.id,
                    title: this.props.title,
                    tabletitle: this.props.tabletitle,
                    width: this.props.width,
                    theme: this.props.theme,
                    footer: this.props.footer,
                    rows: this.props.rows,
                    header: this.props.header,
                    maxValue: this.props.maxValue,
                });

            },



            render: function () {
                var that = this;

                var rowss = [{hour: "20:00", values: [2,3,4]}];

                var content = (
                    <Table id={that.props.id} title={that.props.tabletitle} rows={that.props.rows} maxValue={that.props.maxValue} header={that.props.header} tableType="both" chooser="true" chooserType='radio'/>
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