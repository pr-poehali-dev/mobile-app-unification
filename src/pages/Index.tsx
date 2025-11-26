import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const courses = [
    { id: 1, title: 'Основы волонтерства', progress: 75, duration: '2 часа', category: 'Начало' },
    { id: 2, title: 'Психология помощи', progress: 45, duration: '3 часа', category: 'Психология' },
    { id: 3, title: 'Коммуникация с подопечными', progress: 30, duration: '1.5 часа', category: 'Навыки' },
    { id: 4, title: 'Этика и границы', progress: 0, duration: '2.5 часа', category: 'Этика' },
  ];

  const events = [
    { id: 1, title: 'Встреча новичков', date: '28 ноября', time: '18:00', type: 'Онлайн' },
    { id: 2, title: 'Супервизия волонтеров', date: '30 ноября', time: '19:00', type: 'Офлайн' },
    { id: 3, title: 'Мастер-класс: Работа с травмой', date: '2 декабря', time: '20:00', type: 'Онлайн' },
  ];

  const buddies = [
    { id: 1, name: 'Анна Соколова', role: 'Ментор', experience: '3 года', avatar: 'AS', available: true },
    { id: 2, name: 'Максим Петров', role: 'Супервизор', experience: '5 лет', avatar: 'МП', available: true },
    { id: 3, name: 'Елена Иванова', role: 'Координатор', experience: '2 года', avatar: 'ЕИ', available: false },
  ];

  const messages = [
    { id: 1, from: 'Мария', text: 'Привет! Подскажешь по заполнению анкеты?', time: '10:30', unread: true },
    { id: 2, from: 'Координатор', text: 'Завтра встреча в 18:00', time: 'Вчера', unread: false },
    { id: 3, from: 'Группа волонтеров', text: 'Кто завтра на дежурстве?', time: '2 дня назад', unread: false },
  ];

  const consultations = [
    { id: 1, specialist: 'Психолог Ольга', date: '29 ноября', time: '15:00', type: 'Личная консультация' },
    { id: 2, specialist: 'Куратор Дмитрий', date: '1 декабря', time: '17:00', type: 'Супервизия' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background pb-20">
      <div className="max-w-md mx-auto px-4 pt-6">
        <div className="mb-6 animate-fade-in">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-1">
            Добро пожаловать! 👋
          </h1>
          <p className="text-muted-foreground">Ваша волонтерская платформа</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="home" className="text-xs">
              <Icon name="Home" size={16} />
            </TabsTrigger>
            <TabsTrigger value="knowledge" className="text-xs">
              <Icon name="BookOpen" size={16} />
            </TabsTrigger>
            <TabsTrigger value="events" className="text-xs">
              <Icon name="Calendar" size={16} />
            </TabsTrigger>
            <TabsTrigger value="chat" className="text-xs">
              <Icon name="MessageCircle" size={16} />
            </TabsTrigger>
            <TabsTrigger value="buddy" className="text-xs">
              <Icon name="Users" size={16} />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-4 animate-fade-in">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-heading">Статистика</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-xs text-muted-foreground">Курсов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">8</div>
                  <div className="text-xs text-muted-foreground">Событий</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">5</div>
                  <div className="text-xs text-muted-foreground">Менторов</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-heading flex items-center justify-between">
                  Активные курсы
                  <Icon name="BookOpen" size={18} className="text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {courses.slice(0, 2).map((course) => (
                  <div key={course.id} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{course.title}</h4>
                        <p className="text-xs text-muted-foreground">{course.duration}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">{course.progress}%</Badge>
                    </div>
                    <Progress value={course.progress} className="h-1.5" />
                  </div>
                ))}
                <Button variant="outline" className="w-full" size="sm">
                  Все курсы
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-heading flex items-center justify-between">
                  Ближайшие события
                  <Icon name="Calendar" size={18} className="text-secondary" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {events.slice(0, 2).map((event) => (
                  <div key={event.id} className="flex gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name="Calendar" size={20} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium truncate">{event.title}</h4>
                      <p className="text-xs text-muted-foreground">{event.date} в {event.time}</p>
                      <Badge variant="outline" className="text-xs mt-1">{event.type}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="knowledge" className="space-y-4 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">База знаний</CardTitle>
                <CardDescription>Обучающие материалы и курсы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          <Icon name="Clock" size={14} className="inline mr-1" />
                          {course.duration}
                        </p>
                      </div>
                      <Badge>{course.category}</Badge>
                    </div>
                    <Progress value={course.progress} className="h-2 mb-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{course.progress}% завершено</span>
                      <Button size="sm" variant={course.progress > 0 ? "default" : "outline"}>
                        {course.progress > 0 ? "Продолжить" : "Начать"}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-4 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Календарь событий</CardTitle>
                <CardDescription>Встречи, мероприятия и консультации</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {events.map((event) => (
                  <div key={event.id} className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary/10 flex flex-col items-center justify-center">
                        <span className="text-xs text-secondary font-medium">
                          {event.date.split(' ')[0]}
                        </span>
                        <span className="text-lg font-bold text-secondary">
                          {event.date.split(' ')[1]}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{event.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Icon name="Clock" size={14} />
                          <span>{event.time}</span>
                        </div>
                        <Badge variant={event.type === 'Онлайн' ? "default" : "secondary"}>
                          {event.type}
                        </Badge>
                      </div>
                      <Button size="sm">Записаться</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-lg">Консультации</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {consultations.map((consultation) => (
                  <div key={consultation.id} className="p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {consultation.specialist[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h5 className="text-sm font-medium">{consultation.specialist}</h5>
                        <p className="text-xs text-muted-foreground">{consultation.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {consultation.date} в {consultation.time}
                      </span>
                      <Button size="sm" variant="outline">Отменить</Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full" variant="outline">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Записаться на консультацию
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat" className="space-y-4 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Сообщения</CardTitle>
                <CardDescription>Чаты с волонтерами и координаторами</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-2">
                    {messages.map((message) => (
                      <div 
                        key={message.id} 
                        className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarFallback className="bg-secondary/10 text-secondary">
                              {message.from[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-medium text-sm">{message.from}</h4>
                              <span className="text-xs text-muted-foreground">{message.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">{message.text}</p>
                          </div>
                          {message.unread && (
                            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <Button className="w-full mt-4">
                  <Icon name="MessageSquarePlus" size={16} className="mr-2" />
                  Новый чат
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="buddy" className="space-y-4 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Подбор бадди</CardTitle>
                <CardDescription>Найдите ментора или супервизора</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {buddies.map((buddy) => (
                  <div key={buddy.id} className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-14 w-14">
                        <AvatarFallback className="bg-accent/10 text-accent text-lg">
                          {buddy.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-medium">{buddy.name}</h4>
                            <p className="text-sm text-muted-foreground">{buddy.role}</p>
                          </div>
                          {buddy.available && (
                            <Badge variant="outline" className="text-xs">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1" />
                              Доступен
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <Icon name="Award" size={14} className="text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Опыт: {buddy.experience}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1" disabled={!buddy.available}>
                            Написать
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            Профиль
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex justify-around items-center">
            <Button 
              variant={activeTab === 'home' ? 'default' : 'ghost'} 
              size="sm"
              onClick={() => setActiveTab('home')}
              className="flex-col h-auto py-2 px-3"
            >
              <Icon name="Home" size={20} />
              <span className="text-xs mt-1">Главная</span>
            </Button>
            <Button 
              variant={activeTab === 'knowledge' ? 'default' : 'ghost'} 
              size="sm"
              onClick={() => setActiveTab('knowledge')}
              className="flex-col h-auto py-2 px-3"
            >
              <Icon name="BookOpen" size={20} />
              <span className="text-xs mt-1">Знания</span>
            </Button>
            <Button 
              variant={activeTab === 'events' ? 'default' : 'ghost'} 
              size="sm"
              onClick={() => setActiveTab('events')}
              className="flex-col h-auto py-2 px-3"
            >
              <Icon name="Calendar" size={20} />
              <span className="text-xs mt-1">События</span>
            </Button>
            <Button 
              variant={activeTab === 'chat' ? 'default' : 'ghost'} 
              size="sm"
              onClick={() => setActiveTab('chat')}
              className="flex-col h-auto py-2 px-3"
            >
              <Icon name="MessageCircle" size={20} />
              <span className="text-xs mt-1">Чаты</span>
            </Button>
            <Button 
              variant={activeTab === 'buddy' ? 'default' : 'ghost'} 
              size="sm"
              onClick={() => setActiveTab('buddy')}
              className="flex-col h-auto py-2 px-3"
            >
              <Icon name="Users" size={20} />
              <span className="text-xs mt-1">Бадди</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
