'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

// Blog post type definition
type BlogPost = {
  id: string;
  title: string;
  titleDa?: string;
  excerpt: string;
  excerptDa?: string;
  content: string;
  contentDa?: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  categoryKey:
    | 'aiTechnology'
    | 'resumeTips'
    | 'interviewTips'
    | 'careerAdvice'
    | 'workplaceTrends';
  image: string;
  featured?: boolean;
};

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How AI is Revolutionizing the Job Application Process',
    titleDa: 'Hvordan AI revolutionerer jobansøgningsprocessen',
    excerpt:
      'Discover how artificial intelligence is transforming the way people apply for jobs and how employers find talent.',
    excerptDa:
      'Opdag hvordan kunstig intelligens transformerer måden, folk søger job på, og hvordan arbejdsgivere finder talent.',
    content: '',
    contentDa: '',
    author: 'Maria Jensen',
    date: '2025-04-15',
    readTime: '5 min',
    category: 'AI Technology',
    categoryKey: 'aiTechnology',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000',
    featured: true,
  },
  {
    id: '2',
    title: '10 Resume Tips That Will Get You Noticed in 2025',
    titleDa: '10 CV-tips, der vil få dig bemærket i 2025',
    excerpt:
      'Learn the latest resume trends and techniques that will help your application stand out from the crowd.',
    excerptDa:
      'Lær de seneste CV-tendenser og teknikker, der vil hjælpe din ansøgning med at skille sig ud fra mængden.',
    content: '',
    contentDa: '',
    author: 'Thomas Nielsen',
    date: '2025-04-10',
    readTime: '7 min',
    category: 'Resume Tips',
    categoryKey: 'resumeTips',
    image:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000',
  },
  {
    id: '3',
    title: 'The Future of Work: Remote vs. Hybrid Models',
    titleDa: 'Fremtidens arbejde: Fjernarbejde vs. hybride modeller',
    excerpt:
      'An in-depth analysis of how work arrangements are evolving and what it means for job seekers and employers.',
    excerptDa:
      'En dybdegående analyse af hvordan arbejdsordninger udvikler sig, og hvad det betyder for jobsøgende og arbejdsgivere.',
    content: '',
    contentDa: '',
    author: 'Sofie Andersen',
    date: '2025-04-05',
    readTime: '8 min',
    category: 'Workplace Trends',
    categoryKey: 'workplaceTrends',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000',
  },
  {
    id: '4',
    title: 'Mastering the Virtual Interview: Expert Advice',
    titleDa: 'Behersk det virtuelle interview: Ekspertråd',
    excerpt:
      'Practical tips and strategies to help you succeed in online interviews and video assessments.',
    excerptDa:
      'Praktiske tips og strategier til at hjælpe dig med at få succes i online interviews og videovurderinger.',
    content: '',
    contentDa: '',
    author: 'Lars Petersen',
    date: '2025-03-28',
    readTime: '6 min',
    category: 'Interview Tips',
    categoryKey: 'interviewTips',
    image:
      'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1000',
  },
  {
    id: '5',
    title: 'How to Showcase Soft Skills on Your Resume',
    titleDa: 'Sådan fremviser du bløde kompetencer på dit CV',
    excerpt:
      'Learn effective ways to highlight your interpersonal abilities and stand out to potential employers.',
    excerptDa:
      'Lær effektive måder at fremhæve dine interpersonelle evner og skille dig ud for potentielle arbejdsgivere.',
    content: '',
    contentDa: '',
    author: 'Emma Schmidt',
    date: '2025-03-20',
    readTime: '5 min',
    category: 'Resume Tips',
    categoryKey: 'resumeTips',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000',
  },
  {
    id: '6',
    title: 'Navigating Career Changes in a Digital Economy',
    titleDa: 'Navigering af karriereændringer i en digital økonomi',
    excerpt:
      "Strategies for successfully transitioning to a new career path in today's rapidly evolving job market.",
    excerptDa:
      'Strategier til succesfuld overgang til en ny karrierevej i dagens hurtigt udviklende jobmarked.',
    content: '',
    contentDa: '',
    author: 'Mikkel Hansen',
    date: '2025-03-15',
    readTime: '9 min',
    category: 'Career Advice',
    categoryKey: 'careerAdvice',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000',
  },
];

export default function BlogPage() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(String);

  useEffect(() => {
    setSelectedCategory(t.blog.categories.all);
  }, [language]);

  // Categories for filtering with translations
  const categories = [
    t.blog.categories.all,
    t.blog.categories.aiTechnology,
    t.blog.categories.resumeTips,
    t.blog.categories.interviewTips,
    t.blog.categories.careerAdvice,
    t.blog.categories.workplaceTrends,
  ];

  // Get the translated category name for a post
  const getTranslatedCategory = (categoryKey: string) => {
    switch (categoryKey) {
      case 'aiTechnology':
        return t.blog.categories.aiTechnology;
      case 'resumeTips':
        return t.blog.categories.resumeTips;
      case 'interviewTips':
        return t.blog.categories.interviewTips;
      case 'careerAdvice':
        return t.blog.categories.careerAdvice;
      case 'workplaceTrends':
        return t.blog.categories.workplaceTrends;
      default:
        return categoryKey;
    }
  };

  // Get the translated title and excerpt for a post
  const getTranslatedPost = (post: BlogPost) => {
    return {
      ...post,
      title: language === 'da' && post.titleDa ? post.titleDa : post.title,
      excerpt:
        language === 'da' && post.excerptDa ? post.excerptDa : post.excerpt,
      category: getTranslatedCategory(post.categoryKey),
    };
  };

  // Filter posts based on selected category
  const filteredPosts = blogPosts
    .filter((post) => {
      const matchesCategory =
        selectedCategory === t.blog.categories.all ||
        getTranslatedCategory(post.categoryKey) === selectedCategory;
      return matchesCategory;
    })
    .map(getTranslatedPost);

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'da' ? 'da-DK' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-primary/5 py-16 md:py-24"
        aria-labelledby="blog-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1
              id="blog-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              {t.blog.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8">
              {t.blog.description}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b" aria-labelledby="category-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="category-heading" className="sr-only">
            Filter by category
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
                aria-pressed={selectedCategory === category}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.find((post) => post.featured) &&
        selectedCategory === t.blog.categories.all && (
          <section
            className="py-12 bg-background"
            aria-labelledby="featured-heading"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="featured-heading" className="text-2xl font-bold mb-8">
                {t.blog.featuredArticle}
              </h2>
              {filteredPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <div
                    key={post.id}
                    className="grid md:grid-cols-2 gap-8 items-center"
                  >
                    <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="space-y-4">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        {post.category}
                      </Badge>
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar
                            className="h-4 w-4 mr-1"
                            aria-hidden="true"
                          />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                          <span>{post.readTime} read</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" aria-hidden="true" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <Button className="mt-2">
                          {t.blog.readArticle}{' '}
                          <ArrowRight
                            className="ml-2 h-4 w-4"
                            aria-hidden="true"
                          />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        )}

      {/* Blog Posts Grid */}
      <section
        className="py-12 bg-background flex-grow"
        aria-labelledby="articles-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="articles-heading" className="text-2xl font-bold mb-8">
            {selectedCategory !== t.blog.categories.all
              ? `${selectedCategory} ${t.blog.latestArticles}`
              : t.blog.latestArticles}
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                {t.blog.posts.noArticlesFound}
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory(t.blog.categories.all);
                }}
              >
                {t.blog.posts.viewAllArticles}
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts
                .filter(
                  (post) =>
                    !post.featured || selectedCategory !== t.blog.categories.all
                )
                .map((post) => (
                  <Card key={post.id} className="h-full flex flex-col">
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-t-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardHeader className="flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                          <span>{post.readTime} read</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" aria-hidden="true" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/blog/${post.id}`} className="w-full">
                        <Button variant="outline" className="w-full">
                          {t.blog.readArticle}
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
