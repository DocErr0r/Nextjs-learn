import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ title, description, slug, date, author, image }) => {
    console.log(date);
    return (
        <Card className="w-full max-w-md mx-auto overflow-hidden">
            <div className="relative h-48 w-full">
                <Image src={image} alt={title} layout="fill" objectFit="cover" />
            </div>
            <CardHeader>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-sm text-gray-500">{date._seconds}</p>
            </CardHeader>
            <CardContent>
                <p className="text-gray-700">{description.slice(0, 100)}...</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Avatar>
                        <AvatarImage src={author.image} alt={author.name} />
                        <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{author.name}</span>
                </div>
                <Button asChild>
                    <Link href={`/blogs/${slug}`}>Read More</Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default BlogCard;
