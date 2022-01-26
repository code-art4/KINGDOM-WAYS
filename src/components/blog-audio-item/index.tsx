import { BlogAudioDTO } from "../../dto/Blog.dto";

export default function BlogAudioItem({itemType, image, date, description, id, timerCurrent, timerEnd, timerStart, title, by,href=`/web/blog-post?id=${id}`}:BlogAudioDTO) {
    return (
        <a href={href} className="post_col">
            <img className="blog_img" src={image} alt={title}/>
            <img className="soundcloud" src="/images/soundcloud.svg" alt=""/>
            <div className="soundcloud_player">
                    <h4 className="sound_head">{title}</h4>
                <p className="sound_text">{by}</p>
                <div className="music_player">
                    <h5 className="figure">{timerStart}</h5>
                    <div className="play_buttons">
                        <i className="fa fa-backward play" aria-hidden="true"></i>
                        <i className="fa fa-play" aria-hidden="true"></i>
                        <i className="fa fa-forward play" aria-hidden="true"></i>
                    </div>
                    <h5 className="figure">{timerEnd}</h5>
                </div>
            </div>
        </a>
    );
}