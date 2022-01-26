import React, { useEffect, useState } from "react";
import BlogAudioItem from "../../../../components/blog-audio-item";
import BlogTextItem from "../../../../components/blog-text-item";
import { loadBlogData } from "../../../../controller/blog.controller";
import { BlogAudioDTO, BlogDTO } from "../../../../dto/Blog.dto";
import { BlogData } from "../../../../testModel";
import { fakeModel } from "../../../../utils";

export default function BlogContent() {
    const blogData: BlogAudioDTO[] = [];

    const [list, setList] = useState(blogData);
    
    useEffect(() => {
        loadBlogData(setList);
    }, []);
    
    
    return (
        <section className="blog_posts row">
            {
                list.length > 0 ? list.map((x, index) => {
                    if (x.itemType == "audio") {
                        return (
                            <BlogAudioItem 
                                by={x.by} 
                                date={x.date}
                                description={x.description}
                                id={x.id}
                                image={x.image}
                                itemType={x.itemType}
                                timerCurrent={x.timerCurrent}
                                timerEnd={x.timerEnd}
                                timerStart={x.timerStart}
                                title={x.title}
                                key={index}
                                href={`/web/blog-post?id=${x.id}`}
                            />
                        );
                    }
                    else {
                        return (
                            <BlogTextItem
                                by={x.by}
                                date={x.date}
                                description={x.description}
                                id={x.id}
                                image={x.image}
                                itemType={x.itemType}
                                title={x.title}
                                key={index}
                                href={`/web/blog-post?id=${x.id}`}
                            />
                        );
                    }
                }) : undefined
            }
        </section>
    );
}