export interface IPost {
    slug: string;

    title: string;
    author: string;
    description: string;
    published: IPostDate;
    
    html: string;
    excerpt: string;

    draft: boolean;
    warning: string | null;
}

export type PostListing = Pick<IPost, "title" | "excerpt" | "slug" | "published" | "warning">;

export interface IPostDate {
    year: number;
    month: number;
    date: number;
    timestamp: string;
}

export class PostDate implements IPostDate {
    year: number = new Date().getUTCFullYear();
    month: number = new Date().getUTCMonth() + 1;
    date: number = new Date().getUTCDate();

    timestamp: string = "";
    
    constructor(data: string | Partial<PostDate>) {
        if (typeof(data) === "string") {
            const [year, month, date] = data.split("-");
            this.year = parseInt(year);
            this.month = parseInt(month);
            this.date = parseInt(date);
        } else {
            Object.assign(this, data);
        }
        this.timestamp = this.toString();
    }

    private toString(): string {
        return `${this.year}-${this.pad(this.month)}-${this.pad(this.date)}`;
    }

    private pad(num: number): string {
        return num < 10 ? `0${num}` : `${num}`;
    }
}
