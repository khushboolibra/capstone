import ourstory from "../Images/ourstory.jpg";

const About = () => {
    return (
        <>
            <section class="about_ourstory">
            <div class="container about__ourstory-container">
            <div class="about__ourstory-left">
                <img src={ourstory} alt="" />
            </div>    
            <div class="about__ourstory-right">
                <h1>Our Story</h1>
               <p>
                    In the heart of our community, there's a deep well of enthusiasm and a wealth of good intentions, waiting to be channeled into action. At Community Connect, we've seen the potential for positive change that resides within each individual.But there's been one persistent challenge.A gap between these eager volunteers and the meaningful community projects that need their help. That's why we're building an online platform, a bridge that connects you, the dedicated volunteers, with the vital community initiatives that are just waiting for your support. Our mission is to transform intentions into impact, and together, we can make our community stronger than ever. Join us in building a brighter future, one volunteer at a time.
               </p>
            </div>
        </div>
    </section>
    
    <section class="team">
        <h2> Meet Our team</h2>
        <div class="container team__conatiner">
            <article class="team__member">
                <div class="team__member-image">
                    {/*Image goes here*/}
                </div>
                <div class="team__member-info">
                    <h4>Priyanka BP</h4>
                    <p>Developer</p>
                </div>
                <div class="team__member-socials">
                    <a href="https://instagram.com" target="_blank"><i class="uil uil-instagram"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="uil uil-twitter-alt"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i class="uil uil-linkedin-alt"></i></a>
                </div>
            </article>
            <article class="team__member">
                <div class="team__member-image">
                    {/*Image goes here*/}
                </div>
                <div class="team__member-info">
                    <h4>Fenn</h4>
                    <p>Developer</p>
                </div>
                <div class="team__member-socials">
                    <a href="https://instagram.com" target="_blank"><i class="uil uil-instagram"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="uil uil-twitter-alt"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i class="uil uil-linkedin-alt"></i></a>
                </div>
            </article> 
            <article class="team__member">
                <div class="team__member-image">
                    {/*Image goes here*/}
                </div>
                <div class="team__member-info">
                    <h4>Khusboo</h4>
                    <p>Developer</p>
                </div>
                <div class="team__member-socials">
                    <a href="https://instagram.com" target="_blank"><i class="uil uil-instagram"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="uil uil-twitter-alt"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i class="uil uil-linkedin-alt"></i></a>
                </div>
            </article>
            <article class="team__member">
                <div class="team__member-image">
                    {/*Image goes here*/}
                </div>
                <div class="team__member-info">
                    <h4>Chandru</h4>
                    <p>Developer</p>
                </div>
                <div class="team__member-socials">
                    <a href="https://instagram.com" target="_blank"><i class="uil uil-instagram"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="uil uil-twitter-alt"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i class="uil uil-linkedin-alt"></i></a>
                </div>
            </article>
        </div>
    </section>
        </>
    );
};

export default About;
