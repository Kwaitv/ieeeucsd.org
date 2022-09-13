import * as ReactDom from "react-dom";
import * as React from "react";
import TopBar from "./components/TopBar";
import {ACTIVE_PAGES, SOCIALS, EMAIL, OFFICERS} from "./Config";
import Splash from "./components/Splash";
import DefaultSection from "./components/DefaultSection";
import InvolveBox from "./components/InvolveBox";
import SocialCard from "./components/SocialCard";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

interface MainProps {}
interface MainState {}

class Main extends React.Component<MainProps, MainState> {
	constructor(props: MainProps) {
		super(props);
		this.state = {};
	}
	public render() {
		return <>
			<Splash cta="Projects" delay={2000} backgrounds={["img/backgrounds/robocar.png"]}></Splash>
			<DefaultSection title="Projects" paragraphs={[
				"IEEE hosts Robocup Soccer, an annual project where teams develop six robots to compete with other teams during Robofest. Join this hands-on project to explore computer vision, mechanical design, and microcontroller development!"
				,"Gain project experience through IEEE's Quarterly Projects where teams fully develop a project from scratch within 10 weeks!"
			]}></DefaultSection>
			<div className="project-space">
				<div className="ps-title">Robocup</div>
				<p>“<a href="https://www.robocup.org/">RoboCup</a> is an international scientific initiative with the goal to advance the state of the art of intelligent robots. When established in 1997, the original mission was to field a team of robots capable of winning against the human soccer World Cup champions by 2050.”</p>
				<p>IEEE hosts Robocup Soccer, an annual project where teams develop six robots to compete with other teams during Robofest. Join this hands-on project to explore computer vision, mechanical design, and microcontroller development!</p>
			</div>
			<div className="project-space">
				<div className="ps-title">Quarterly Projects</div>
				<p>Gain project experience through IEEE's Quarterly Projects where teams fully develop a project from scratch within 10 weeks!</p>
				<a href="https://forms.gle/eW6e1i3vWCdBj7Vn6">Apply here!</a>
			</div>
			<DefaultSection className={"past-proj"} title="Past Projects">
				<div className="cards">
					<InvolveBox boxTitle="" image="img/backgrounds/fa21social.png" description="Meet fellow IEEE members!"></InvolveBox>
					<InvolveBox boxTitle="" image="img/backgrounds/robofest.png" description="Learn new skills!"></InvolveBox>
					<InvolveBox boxTitle="" image="img/backgrounds/gbm.png" description="Build our amazing community!"></InvolveBox>
				</div>
			</DefaultSection>
			<DefaultSection title="Have questions? Contact us!">
				<div className="join-scls">{
					[...EMAIL, ...SOCIALS].map(n => (
						<SocialCard url={n.url} image={n.icon} message={n.message}></SocialCard>
					))
				}</div>
			</DefaultSection>
			<Footer></Footer>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};