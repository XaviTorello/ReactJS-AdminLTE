define(
    [
        'react',
        'jquery',
        './header-bar/header-bar',
        './navigation-menu/navigation-menu',
        './footer-bar/footer-bar',
        './widgets/table-box/table-box',
        './widgets/info-tile/info-tile',
        './widgets/info-tile/progress-bar',
        './widgets/stat-tile',
        './widgets/custom-box/box',
        './widgets/chat-box/chat-box',
        './widgets/chat-box/conversations',
        './widgets/chat-box/contacts',
        './widgets/profile-card/profile-card',
        './widgets/profile-card/profile-info-list',
        './widgets/profile-card/profile-info-blocks',
        './widgets/post/post',
        './widgets/post/social-button',
        './widgets/post/social-info'

    ],
    function (React, $, HeaderBar, NavigationMenu, FooterBar, TableBox, InfoTile, ProgressBar, StatTile, Box, ChatBox, Conversations, Contacts, ProfileCard, ProfileInfoList, ProfileInfoBlocks, Post, SocialButton, SocialInfo) {
        var Widgets = React.createClass({
            getInitialState: function() {
                return {
                    infoTileOptions: [],
                    progressInfoTileOptions: [],
                    statTileOptions: [],
                    boxOptions: [],
                    boxBorderedOptions: [],
                    chatBoxOptions: [],
                    profileCardOptions: [],
                    postOptions: [],
                    userOptions: [{}]

                }
            },
            componentDidMount: function() {
                var infoTileOptions = [{
                    theme: 'bg-aqua',
                    icon: 'fa-envelope-o',
                    subject: 'Messages',
                    stats: '1,310',
                    content: ''
                }, {
                    theme: 'bg-green',
                    icon: 'fa-flag-o',
                    subject: 'Bookmarks',
                    stats: '410',
                    content: ''
                }, {
                    theme: 'bg-yellow',
                    icon: 'fa-files-o',
                    subject: 'Uploads',
                    stats: '13,648',
                    content: ''
                }, {
                    theme: 'bg-red',
                    icon: 'fa-star-o',
                    subject: 'Likes',
                    stats: '93,139',
                    content: ''
                }];

                var progressInfoTileOptions = [{
                    theme: 'bg-aqua',
                    icon: 'fa-bookmark-o',
                    subject: 'Bookmarks',
                    stats: '41,410',
                    content: '',
                    progressPercent: 50,
                    progressDescription: '50% Increase in 30 Days',
                    progressColor: 'white'
                }, {
                    theme: 'bg-green',
                    icon: 'fa-thumbs-o-up',
                    subject: 'Likes',
                    stats: '41,410',
                    content: '',
                    progressPercent: 50,
                    progressDescription: '50% Increase in 30 Days',
                    progressColor: 'white'
                }, {
                    theme: 'bg-yellow',
                    icon: 'fa-calendar',
                    subject: 'Events',
                    stats: '41,410',
                    content: '',
                    progressPercent: 70,
                    progressDescription: '70% Increase in 30 Days',
                    progressColor: 'white'
                }, {
                    theme: 'bg-red',
                    icon: 'fa-comments-o',
                    subject: 'comments',
                    stats: '41,410',
                    content: '',
                    progressPercent: 70,
                    progressDescription: '70% Increase in 30 Days',
                    progressColor: 'white'
                }];




                this.setState({
                    infoTileOptions: infoTileOptions,
                    progressInfoTileOptions: progressInfoTileOptions,
                });

            },
            render: function() {
                var infoTileWidgets = this.state.infoTileOptions.map(function (options, iterator) {
                    return (
                        <InfoTile
                            key = {"rowOne"+iterator}
                            width = {3}
                            content = ''
                            icon = {options.icon}
                            stats = {options.stats}
                            subject = {options.subject}
                            theme = {options.theme} />
                    )
                });

                var progressInfoTileWidgets = this.state.progressInfoTileOptions.map(function (options, iterator) {
                    return (
                        <InfoTile
                            key = {"rowTwo"+iterator}
                            width = {3}
                            content=''
                            icon = {options.icon}
                            stats = {options.stats}
                            subject = {options.subject}
                            theme = {options.theme} >
                            <ProgressBar percent={options.progressPercent} description={options.progressDescription} color={options.progressColor} />
                        </InfoTile>
                    )
                });

                var statTileWidgets = this.state.statTileOptions.map(function (options, iterator) {
                    return (
                        <StatTile
                            key={"rowThree"+iterator}
                            width = {3}
                            icon = {options.icon}
                            link = {options.link}
                            stats = {options.stats}
                            subject = {options.subject}
                            theme = {options.theme} />
                    )
                });



                var ultimGrafic = {
                        contingut: "Ultim",
                        titol: "Ultim",
                        peu:"Peu taula"
                };

                var rows = [];
                var max_value = 0;
                for (var i=0; i<24; i++) {
                    var valueTmp = Math.round(Math.random()*100);

                    rows.push ({
                        hour: String("0"+i).slice(-2)+":00",
                        values:[ valueTmp,( valueTmp+10 ),( valueTmp+15 ) ]
                    });

                    max_value = Math.max(max_value, valueTmp+15);
                }

                var taula = {
                    title: "15/04",
                    header: [
                        {title: "Hora"}, {title: "Escenari 1"}, {title: "Escenari 2"}, {title: "Escenari 3"}
                    ],
                    rows: rows,
                    max: max_value
                };

                var userOptions = {
                    username: 'xtorello',
                    displayName: 'Xavi Torelló',
                    description: 'Technology enthusiast',
                    displayPicture: '../dist/img/me.png',
                    company: "GISCE-TI",
                    status: "online",
                    date: "Febrer 2015"
                };

                return (
                    <div className="wrapper">
                        <HeaderBar userOptions={userOptions}/>
                        
                        <NavigationMenu userOptions={userOptions}/>

                        <div className="content-wrapper">
                            <section className="content-header">
                                <h1>
                                    Títol
                                    <small>Subtitol</small>
                                </h1>
                                {<ol className="breadcrumb">
                                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                                    <li className="active">Dashboard</li>
                                </ol>}
                            </section>

                            <section className="content">
                                <div className="row">
                                    {infoTileWidgets}
                                </div>

                                <div className="row">
                                    {progressInfoTileWidgets}
                                </div>


                                <h2 className="page-header">Taula</h2>
                                <div className="row">
                                    <TableBox
                                        title="Última predicció"
                                        width="12"
                                        theme="box-danger"
                                        border={true}
                                        collapsable = {true}
                                        closable = {true}
                                        content={ultimGrafic.contingut}
                                        tabletitle={taula.title}
                                        rows={taula.rows}
                                        header={taula.header}
                                        footer={ultimGrafic.peu}
                                        maxValue = {taula.max}
                                        id = "55"
                                    />
                                </div>

                                <h2 className="page-header">Prediccions</h2>
                                <div className="row">
                                    <Box
                                        title="Últim gràfic"
                                        width="4"
                                        theme="box-primary"
                                        border={true}
                                        boxTools = {['collapse','remove']} 
                                        content={ultimGrafic.contingut}
                                        contentTitle={ultimGrafic.titol}
                                        footer={ultimGrafic.peu}
                                    />
                                    <Box
                                        title="Últim gràfic"
                                        width="4"
                                        theme="box-primary"
                                        border={true}
                                        boxTools = {['collapse','remove']}
                                        content=""
                                        footer="footer_caixa"
                                    />
                                    <Box
                                        title="Últim gràfic"
                                        width="4"
                                        theme="box-primary"
                                        border={true}
                                        boxTools = {['collapse','remove']}
                                        content=""
                                        footer="footer_caixa"
                                    />

                                </div>

                            </section>

                        </div>

                        <FooterBar product="oraKWlum" owner="GISCE-TI" ownerUrl="http://gisce.net" version="0.0.1"/>



                        {/*<ControlsMenu />*/}
                    </div>
                )
            }
        });

        return Widgets;
    }
)