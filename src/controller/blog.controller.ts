import moment from "moment";
import { getBlogApi } from "../api/blog.api";
import { ResponseDTO } from "../dto/response.dto";
import { statusEnum } from "../enums/util.enum";
import { BlogData } from "../testModel";
import { fakeModel } from "../utils";
import { BlogDTO, BlogItemDTO } from "./../dto/Blog.dto";

export async function loadBlogData(setList: Function) {
    try {

        if (fakeModel) {
            setList(BlogData);
        }
        else {
            const response: ResponseDTO = await getBlogApi();
            if (response.code < statusEnum.ok) {
                throw new Error(response.extra_data.toString());
            }

            const data:BlogItemDTO[] = response.data;
            const branchData:BlogDTO[] = [];
            data && data.length > 0 && data.map(x => {
                branchData.push(new BlogDTO({
                    by: x.authorName,
                    date: new Date(x.dateCreated),
                    description: x.aboutAuthor,
                    title: x.title,
                    id: x.id,
                    image: (x.blogImages.length > 0 ? x.blogImages[0].imageUrl : ""),
                    itemType: "simple"

                }));

                // remove once dataset is sizable
                branchData.push(new BlogDTO({
                    by: x.authorName,
                    date: new Date(x.dateCreated),
                    description: x.aboutAuthor,
                    title: x.title,
                    id: x.id,
                    image: (x.blogImages.length > 0 ? x.blogImages[0].imageUrl : ""),
                    itemType: ""

                }));
            });

            setList(branchData);
        }
    }
    catch(e) {
        console.error(e);
    }
    
}