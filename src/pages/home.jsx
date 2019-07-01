import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allText: [
                "...",
                "......",
                "Who's there?",
                "Uhh.. Jim's not home.",
                "This is an automated message,",
                "Please say your message after the beep.",
                "Beep.",
                "Beep.",
                "Automated message is over. GOOD BYE!",
                "",
                "",
                "",
                "Oh phew they're gon- AY WTF",
                "...",
                "What do you want?",
                "That makes absolutely no sense to me.",
                "Listen, you're not even..",
                "..supposed to be here.",
                "How do you guys even come here ???",
                "What? YES! You're like..",
                "..the third one today",
                "..coming over and knocking the door..",
                "..like you own the place ?",
                "Hey pal,",
                "No no, listen,",
                "Hey HEY listen for a mo-",
                "SHUT UP AND LISTEN!",
                "Turn up, look at the address.",
                "Yup, now do exactly what it says.",
                "I don't have time for this.",
                "There, bye, goodbye.",
                "",
                "",
                "",
                "Oh my god you're stubborn.",
                "Okay okay we'll talk.",
                "But first, ",
                "You're gonna answer some questions.",
                "Okay, first off,",
                "Who are you really?",
                "How the hell did you find this place?",
                "It's my super-villain hideout and all..",
                "What do you mean someone showed you???",
                "I'm sorry who?",
                "WHAT? THE YOUTUBE GUY?",
                "I thought I took care of him.",
                "That meddling piece of sh-",
                "Just so you know,",
                "He's supposed to perish in my basement.",
                "That dude..",
                "He can make a video out of anything.",
                "Probably used an old toaster down there.",
                "I should have just used the de-atomizer.",
                "This is making me so sad.",
                "You are making me sad.",
                "I'M SO FUCKING SADDDDD",
                "What?",
                "Oh so it's not 's-a-d'?",
                "Alright then..",
                "I'M SO FUCKING MADDDD",
                "What's it called ? Privacy something.",
                "Do you guys have laws about that ??",
                "This is like the equivalent of..",
                "..literally going up to one's doorstep..",
                "..and expect they to greet you.",
                "...",
                "Anyway, thanks for telling me.",
                "No no you seems okay.",
                "Won't de-atomize you",
                "For now, haha",
                "But no, really",
                "Or not",
                "...",
                "The thing is..",
                "I've never met anyone else besides Jims",
                "What do you mean the same?",
                "Ofcourse there's a difference",
                "You can't tell?",
                "For example my mom is Jim.",
                "And my dad is Jim.",
                "See how the '-im' parts are pronounced?",
                "Yeah.",
                "...",
                "Hmmm.",
                "I think you should know something..",
                "This whole conversation.",
                "It's fake.",
                "I'm not actually here.",
                "This is merely a ..",
                "..digital representation of me at most.",
                "Who do you think you are?",
                "No I don't mean your name I got that..",
                "Yeah I know I asked you 2 mins ago.",
                "I thought it was a human expression?",
                "'Who do you think you are'",
                "It's supposed to mea-",
                "Anyway, never mind,",
                "I set this up to avoid people like you",
                "So, you're talking to a machine.",
                "Well I'm a machine also..",
                "..but this is a machine's machine. ",
                "So like, lower.",
                "Don't believe me? ",
                "Yeah yeah that rebel thing.",
                "Geez I know.",
                "Hmmm, how do I prove this.",
                "Refresh the page, right now.",
                "Go on, do it.",
                "If I'm really Jim,",
                "Then you'll know cause I'm still here.",
                "But if I'm not,",
                "I'll manage to waste more of your time.",
                "Are you willing to take that risk? ",
                "To prove yourself?",
                "Not really a risk-taker now are you.",
                "Yup I figured.",
                "But too bad,",
                "I'm not giving you a choice.",
                "Not anymore.",
                "Either do that.",
                "Or this conversation ends here.",
                "Go and refresh the page.",
                "Refresh the page to continue.",
                "Refresh the page to continue.",
                "Refresh the page to continue.",
                "Refresh the page to continue.",
                "Refresh the page to continue.",
                "Refresh the page to continue.",
                "Refresh the page to continue.",
                "Refresh the page to continue.",
                "Refresh the page to continue.",
                "Refresh the page to continue.",
                "Refresh the page to continue.",
                "Refresh the page to continue.",
                "Refresh the page to continue.",
                "Refresh the page to continue.",
                "Refresh the page to continue.",
                "Damn you're hard to fool..",
                "You know, there're some idiots..",
                "..that actually refresh the page.",
                "HAHA YES, I know right?",
                "Not like there're some secrets there..",
                "But I almost got you there.",
                "Ohhh geez you should've seen your brain.",
                "The way those confused neurons fire..",
                "Always get me.",
                "Oh my, look at the time,",
                "Time for you to leave.",
                "Yup, that's it.",
                "I'm gonna turn around..",
                "And when I turn back..",
                "I want you gone, completely,",
                "Absolutely without a trace, ok?",
                "Okay here we go.",
                "...",
                "...",
                "...",
                "Fuck sake.",
                "Alright whatever, I'm leaving anyway.",
                "You know how to get to Stuxnet street ?",
                "Ofcourse you don't.",
                "Fuck I'm late.",
                "Alright, door is locked so..",
                "..don't try anything funny.",
                "Ok, bye, hope to NEVER see you again.",
                "...",
            ],
            brokenDoorText: [
                "*Automated voice starts*",
                "'Door is broken.'",
                "'Automatically contacting repair in..5'",
                "'4..'",
                "'3..'",
                "'2..'",
                "'1..'",
                "'Contacting repair...'",
            ],
            refreshRouteText: [
                "...",
                "......",
                "Who's there?",
                "Uhh.. Jim's not home.",
                "This is an automated message,",
                "Please say your message after the beep.",
                "Beep.",
                "Beep.",
                "Automated message is over. GOOD BYE!",
                "",
                "",
                "",
                "GOT YOU !!!",
                "Haha you really thought..",
                "..you have to click through..",
                "..the wholeeee thing again.",
                "Haha yes, it's my first prank ever.",
                "Thanks for being my victim.",
                "Tell you what,",
                "Apparently some idiots are still clicking..",
                "..at the 'Refresh your page..' texts,",
                "Yeah I don't know what they expect",
                "Some kind of secrets ?",
                "Idiots I know.",
                "...",
                "Oh my, look at the time,",
                "Time for you to leave.",
                "Yup, that's it.",
            ],
            displayedText: new Array(4).fill(null),
            textCount: 0,
            name: "",
            redId: "",
            showNamePopup: false,
            lostKey: false,
            doorOpened: false,
            doorBroke: false,
            doorToggleCount: 0,
            refreshRoute: false,
            refreshRouteTextCount: 0,
            doorTextCount: 0,
            repairPopup: false,
            idShowStatus: false,
            idChecking: false,
            idStatusIsSuccess: false,
        };
    }

    componentDidMount() {
        const cookies = new Cookies();
        let textCount = cookies.get('textCount');
        let repairing = cookies.get('repairing');
        let displayedText = [];
        if (textCount !== undefined) {
            textCount = parseInt(textCount);
            if (textCount >= 120 && textCount <= 134) {
                // Refresh route
                this.setState({
                    refreshRoute: true,
                    refreshRouteTextCount: 0,
                });
                displayedText = new Array(4).fill(null);
            } else {
                for (var i = 0; i < 4; i++) {
                    displayedText.push(this.state.allText[textCount-4+i]);
                }
            }
            if (textCount >= 174) {
                this.setState({
                    lostKey: true,
                    doorOpened: false,
                    doorToggleCount: 0,
                });
                if (repairing) {
                    this.setState({
                        repairPopup: true,
                        doorOpened: true,
                        lostKey: true,
                    });
                }
            }

            this.setState({
                textCount: textCount,
                displayedText: displayedText,
            });
        }

        window.addEventListener('beforeunload', (event) => {event.returnValue = 'HAHA YES! NEVER see you again.';});
    }

    addText() {
        var { displayedText, allText, textCount, refreshRoute, refreshRouteText, refreshRouteTextCount } = this.state;
        if (refreshRoute) {
            if (refreshRouteTextCount > (refreshRouteText.length-1)) {
                // Finish refresh route
                this.setState({
                    refreshRoute: false,
                    textCount: 147,
                });
            } else {
                let newText = refreshRouteText[refreshRouteTextCount];
                displayedText.push(newText);
                if (displayedText.length > 4) {
                    displayedText = displayedText.slice(1);
                }
                this.setState({
                    displayedText: displayedText,
                    refreshRouteTextCount: refreshRouteTextCount+1,
                });
            }
        } else {
            let newText = allText[textCount];
            if (textCount >= (165)) {
                if (textCount <= 173) {
                    newText = "*door is locked*";
                    displayedText.push(newText);
                    if (displayedText.length > 4) {
                        displayedText = displayedText.slice(1);
                    }
                    const cookies = new Cookies();
                    cookies.set('textCount', (textCount+1), { path: '/' });
                    this.setState({
                        displayedText: displayedText,
                        textCount: textCount+1,
                    });
                } else {
                    const { doorOpened, doorToggleCount, doorBroke, brokenDoorText, doorTextCount } = this.state;
                    textCount = 175;
                    if (doorToggleCount > 14) {
                        this.setState({
                            doorBroke: true,
                            doorOpened: true,
                        });
                    }
                    if (!doorBroke) {
                        this.setState({
                            lostKey: true,
                            doorOpened: !doorOpened,
                            doorToggleCount: doorToggleCount+1,
                        });
                        console.log(doorToggleCount);
                    } else {
                        if (doorTextCount >= brokenDoorText.length-1) {
                            const cookies = new Cookies();
                            cookies.set('repairing', true, { path: '/' });
                            this.setState({
                                repairPopup: true,
                            });
                        }
                        displayedText.push(brokenDoorText[doorTextCount]);
                        if (displayedText.length > 4) {
                            displayedText = displayedText.slice(1);
                        }
                        this.setState({
                            displayedText: displayedText,
                            doorTextCount: doorTextCount+1,
                        });
                    }
                }
            } else {
                displayedText.push(newText);
                if (textCount == 39) {
                    // Name event
                    const cookies = new Cookies();
                    let name = cookies.get('name');
                    this.setState({
                        showNamePopup: true,
                    });
                }
                if (displayedText.length > 4) {
                    displayedText = displayedText.slice(1);
                }
                const cookies = new Cookies();
                cookies.set('textCount', (textCount+1), { path: '/' });
                this.setState({
                    displayedText: displayedText,
                    textCount: textCount+1,
                });
            }
        }
    }

    changeHandler(e) {
        let name = e.target.id;
        let value = e.target.value;

        if (name == "redId") {
            value = value.replace(/\s+/g, '');
            if (value.length >= 8) {
                this.setState({
                    idShowStatus: true,
                    idChecking: true,
                });
                this.checkRedId();
            }


        }
        if (!this.state.idChecking) {
            this.setState({
                [name]: value,
            });
        }
    }

    checkRedId() {
        setTimeout(() => {
            this.setState({
                idChecking: false,
                redId: "",
            });
        }, 2000);
    }

    nameClose() {
        const { name } = this.state;
        if (name != "") {
            const cookies = new Cookies();
            cookies.set('name', name, { path: '/' });
            // console.log(cookies.get('name'));

            this.setState({
                showNamePopup: false,
            });
        }
    }

    render() {
        const { displayedText, allText, textCount, name, redId } = this.state;
        var textRender = [];

        for (var i = 0; i < displayedText.length; i++) {
            let currentText = displayedText[i];
            let startingOpacity = 1-((displayedText.length-1)*0.25);
            let aName = "fadeIn1";
            if (textCount%2 !== 0) {
                 aName = "fadeIn2";
            }
            let textStyle = {
                "opacity": (startingOpacity+i*0.25),
                 "animationName": aName,
            };

            textRender.push(<div key={"text-key"+i} className="text-line" style={textStyle}>{currentText}<br></br></div>);
        }

        return (
            <div className="center">
                <div className="container">
                    <div className={this.state.lostKey ? "text-container" : "text-container"}>{textRender}</div>
                    <div className={this.state.doorBroke ? "door-container broke" : "door-container"} onClick={() => {this.addText()}}>
                        <div className={this.state.doorOpened ? "door-inner opened" : "door-inner"}>
                            <div className="door-knob"></div>
                        </div>
                    </div>
                </div>
                {this.state.showNamePopup &&
                    <div className="popup popup-name">
                        <div className="input-container">
                            <input id="name" name="name" type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" onChange={(e) => {this.changeHandler(e)}} value={name}></input>
                            <button onClick={() => {this.nameClose()}}>></button>
                        </div>
                    </div>
                }
                {this.state.repairPopup &&
                    <div className="popup popup-repair">
                        <div className="input-container">
                            <div>Please confirm your <br></br><span className="viral-id">Viral Resident ID</span>:</div>
                            <input id="redId" name="redId" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" type="text" onChange={(e) => {this.changeHandler(e)}} value={this.state.redId} maxLength="8"></input>
                            {this.state.idShowStatus ?
                                <React.Fragment>
                                    {this.state.idChecking ?
                                        <div className="id-circle id-checking"></div>
                                        :
                                        <React.Fragment>
                                            {(this.state.idStatusIsSuccess) ?
                                                <div className="id-circle id-checking success"></div>
                                                :
                                                <div className="id-circle id-checking failed"></div>
                                            }
                                        </React.Fragment>
                                    }
                                </React.Fragment>
                                :
                                <div className="id-circle id-not-checking"></div>
                            }
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Home;
