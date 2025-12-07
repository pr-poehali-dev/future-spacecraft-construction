# Руководство по работе с проектом Stellar Voyager

Полная инструкция по настройке, редактированию и публикации вашего сайта.

## 🚀 Быстрый старт

### Установка зависимостей

```bash
npm install
```

или с bun:

```bash
bun install
```

### Запуск проекта локально

```bash
npm run dev
```

или:

```bash
bun run dev
```

Сайт откроется по адресу: `http://localhost:5173`

### Сборка для продакшена

```bash
npm run build
```

Результат сборки появится в папке `dist/`

## 📁 Структура проекта

```
├── src/
│   ├── components/       # Переиспользуемые компоненты
│   │   ├── ui/          # UI компоненты (кнопки, карточки и т.д.)
│   │   ├── Hero.tsx     # Главный баннер
│   │   ├── Navigation.tsx  # Навигация
│   │   ├── Timeline.tsx    # Временная шкала
│   │   ├── MissionCard.tsx # Карточки миссий
│   │   └── ...
│   ├── pages/           # Страницы сайта
│   │   └── Index.tsx    # Главная страница
│   ├── App.tsx          # Главный компонент приложения
│   ├── index.css        # Глобальные стили
│   └── main.tsx         # Точка входа
├── public/              # Статические файлы
├── tailwind.config.ts   # Настройки Tailwind CSS
└── vite.config.ts       # Конфигурация Vite
```

## 🎨 Технологии

- **React 18** - UI библиотека
- **TypeScript** - типизация
- **Vite** - сборщик проекта
- **Tailwind CSS** - стилизация
- **Lucide React** - иконки
- **Framer Motion** - анимации

## ✏️ Редактирование контента

### Основные файлы для редактирования:

#### 1. Главная страница (`src/pages/Index.tsx`)
Здесь находится весь контент главной страницы: секции, тексты, структура.

**Как изменить заголовок в Hero секции:**
```tsx
<h1 className="...">
  Stellar Voyager  {/* Измените этот текст */}
</h1>
```

#### 2. Навигация (`src/components/Navigation.tsx`)
Меню в шапке сайта.

**Как добавить новый пункт меню:**
```tsx
const menuItems = [
  { href: "#about", label: "О нас" },
  { href: "#missions", label: "Миссии" },
  { href: "#timeline", label: "История" },
  { href: "#new-section", label: "Новая секция" }, // Добавьте здесь
];
```

#### 3. Временная шкала (`src/components/Timeline.tsx`)
История развития проекта.

**Как добавить новое событие:**
```tsx
const timelineEvents = [
  {
    year: "2026",
    title: "Новое событие",
    description: "Описание нового события",
    icon: "Rocket"
  },
  // ... остальные события
];
```

#### 4. Цвета и темы (`tailwind.config.ts` и `src/index.css`)

**Глобальные цвета в `src/index.css`:**
```css
:root {
  --primary: 217 91% 60%;      /* Основной синий цвет */
  --secondary: 222 47% 11%;    /* Тёмный фон */
  --accent: 217 91% 60%;       /* Акцентный цвет */
}
```

**Изменить цвет на весь сайт:**
Просто замените значения переменных выше, и весь сайт обновится!

### Как изменить изображения:

#### Способ 1: Через poehali.dev
1. Загрузите изображение в чат poehali.dev
2. Скажите Юре, куда его поставить
3. Изменения автоматически применятся

#### Способ 2: Локально в VS Code
1. Добавьте изображение в папку `public/`
2. Используйте путь в коде:
```tsx
<img src="/my-image.jpg" alt="Описание" />
```

## 🎯 Частые задачи

### Изменить текст на странице

1. Найдите файл с нужной секцией (обычно `src/pages/Index.tsx`)
2. Найдите текст через поиск (Ctrl+F)
3. Замените на новый текст
4. Сохраните файл (Ctrl+S)
5. Изменения сразу отобразятся в браузере

### Изменить цвет кнопок

Откройте `src/index.css` и измените:
```css
--primary: 217 91% 60%;  /* Измените эти числа для другого цвета */
```

Или в конкретной кнопке замените класс:
```tsx
<Button className="bg-blue-500">  {/* Было */}
<Button className="bg-green-500"> {/* Стало */}
```

### Добавить новую секцию

В файле `src/pages/Index.tsx` добавьте:
```tsx
<section id="new-section" className="py-20 px-6">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold mb-8">Новая секция</h2>
    <p>Ваш контент здесь</p>
  </div>
</section>
```

### Удалить секцию

Найдите нужную `<section>` в `src/pages/Index.tsx` и удалите весь блок от `<section>` до `</section>`.

## 📤 Публикация изменений

### Вариант 1: Через poehali.dev (проще всего)
1. Вернитесь в редактор poehali.dev
2. Скажите Юре: "Обнови проект из моих локальных изменений" или просто опишите, что изменили
3. Нажмите **Опубликовать**

### Вариант 2: Через GitHub
1. Подключите GitHub в poehali.dev (**Скачать → Подключить GitHub**)
2. В терминале VS Code:
```bash
git add .
git commit -m "Описание изменений"
git push
```
3. Изменения автоматически синхронизируются с poehali.dev

## 🐛 Решение проблем

### Сайт не запускается
```bash
# Удалите node_modules и переустановите
rm -rf node_modules
npm install
npm run dev
```

### Ошибки TypeScript
Проверьте импорты в начале файла - все ли компоненты правильно импортированы.

### Стили не применяются
1. Проверьте, что классы Tailwind написаны правильно
2. Перезапустите dev-сервер: Ctrl+C, затем `npm run dev`

## 🔗 Полезные ссылки

- [Документация poehali.dev](https://docs.poehali.dev)
- [React документация](https://react.dev)
- [Tailwind CSS классы](https://tailwindcss.com/docs)
- [Иконки Lucide](https://lucide.dev/icons/)
- [Vite документация](https://vitejs.dev)

## 💬 Поддержка

**Нужна помощь?**
- Напишите в чат poehali.dev - Юра всегда поможет! 🚀
- Сообщество Telegram: https://t.me/+QgiLIa1gFRY4Y2Iy
- Или просто опишите проблему прямо в редакторе poehali.dev

## 🎓 Советы для начинающих

1. **Не бойтесь экспериментировать** - всегда можно откатить изменения через Git
2. **Изучайте существующий код** - смотрите, как написаны компоненты, и повторяйте паттерны
3. **Используйте Ctrl+F** для поиска нужного текста в файлах
4. **Меняйте по чуть-чуть** - сначала одно изменение, посмотрите результат, потом следующее
5. **Спрашивайте Юру** - если что-то непонятно, просто опишите, что хотите сделать

## 🔨 Создание новых компонентов

### Простой компонент (без логики)

Создайте файл `src/components/MyComponent.tsx`:

```tsx
interface MyComponentProps {
  title: string;
  description?: string;
}

export default function MyComponent({ title, description }: MyComponentProps) {
  return (
    <div className="p-6 bg-card rounded-lg border">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
}
```

**Использование:**
```tsx
import MyComponent from '@/components/MyComponent';

<MyComponent title="Заголовок" description="Описание" />
```

### Компонент с состоянием (useState)

Создайте файл `src/components/Counter.tsx`:

```tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <Button onClick={() => setCount(count - 1)}>-</Button>
      <span className="text-2xl font-bold">{count}</span>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  );
}
```

### Компонент с иконками

Создайте файл `src/components/FeatureCard.tsx`:

```tsx
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <Icon name={icon} size={48} className="text-primary mb-4" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
```

**Использование:**
```tsx
<FeatureCard 
  icon="Rocket" 
  title="Быстрая доставка" 
  description="Доставка в любую точку галактики" 
/>
```

### Компонент со списком (map)

Создайте файл `src/components/TeamList.tsx`:

```tsx
import { Card, CardContent } from '@/components/ui/card';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar?: string;
}

interface TeamListProps {
  members: TeamMember[];
}

export default function TeamList({ members }: TeamListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member) => (
        <Card key={member.id}>
          <CardContent className="p-6">
            {member.avatar && (
              <img 
                src={member.avatar} 
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
            )}
            <h3 className="text-xl font-bold text-center">{member.name}</h3>
            <p className="text-muted-foreground text-center">{member.role}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

**Использование:**
```tsx
const team = [
  { id: 1, name: "Иван Петров", role: "Капитан" },
  { id: 2, name: "Мария Сидорова", role: "Инженер" },
];

<TeamList members={team} />
```

### Компонент с анимацией (Framer Motion)

Создайте файл `src/components/AnimatedCard.tsx`:

```tsx
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface AnimatedCardProps {
  title: string;
  delay?: number;
}

export default function AnimatedCard({ title, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="hover:scale-105 transition-transform">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold">{title}</h3>
        </CardContent>
      </Card>
    </motion.div>
  );
}
```

**Использование:**
```tsx
<AnimatedCard title="Карточка 1" delay={0} />
<AnimatedCard title="Карточка 2" delay={0.1} />
<AnimatedCard title="Карточка 3" delay={0.2} />
```

### Компонент формы

Создайте файл `src/components/ContactForm.tsx`:

```tsx
import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    alert('Форма отправлена!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm font-medium mb-2">Имя</label>
        <Input 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <Input 
          type="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Сообщение</label>
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border rounded-md"
          rows={4}
          required 
        />
      </div>
      
      <Button type="submit" className="w-full">
        Отправить
      </Button>
    </form>
  );
}
```

### Советы по компонентам:

1. **Именование файлов**: Всегда PascalCase (`MyComponent.tsx`)
2. **Props типизация**: Используйте TypeScript интерфейсы
3. **Переиспользование**: Создавайте маленькие, переиспользуемые компоненты
4. **UI компоненты**: Используйте готовые из `@/components/ui/`
5. **Импорт алиас**: Используйте `@/` вместо относительных путей
6. **Responsive дизайн**: Используйте `md:`, `lg:` префиксы Tailwind
7. **Иконки**: Всегда через `<Icon name="..." />` компонент

## 🌐 Работа с API и загрузка данных

### Загрузка данных при монтировании (useEffect)

Создайте файл `src/components/UsersList.tsx`:

```tsx
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Ошибка загрузки данных');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center">Загрузка...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="grid gap-4">
      {users.map(user => (
        <Card key={user.id}>
          <CardContent className="p-4">
            <h3 className="font-bold">{user.name}</h3>
            <p className="text-muted-foreground">{user.email}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

### Отправка данных на сервер (POST запрос)

Создайте файл `src/components/CreatePostForm.tsx`:

```tsx
import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CreatePostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body, userId: 1 }),
      });

      if (response.ok) {
        setSuccess(true);
        setTitle('');
        setBody('');
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (error) {
      alert('Ошибка при отправке');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      {success && (
        <div className="bg-green-100 text-green-800 p-3 rounded">
          Пост успешно создан!
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium mb-2">Заголовок</label>
        <Input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
          required 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Текст</label>
        <textarea 
          value={body} 
          onChange={(e) => setBody(e.target.value)}
          className="w-full p-3 border rounded-md"
          rows={4}
          disabled={loading}
          required 
        />
      </div>
      
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Отправка...' : 'Создать пост'}
      </Button>
    </form>
  );
}
```

### Поиск с задержкой (debounce)

Создайте файл `src/components/SearchUsers.tsx`:

```tsx
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface User {
  id: number;
  name: string;
  username: string;
}

export default function SearchUsers() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setUsers([]);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
        .then(response => response.json())
        .then(data => {
          setUsers(data);
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="max-w-md">
      <Input 
        placeholder="Поиск пользователей..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      
      {loading && <div className="mt-4 text-center">Поиск...</div>}
      
      <div className="mt-4 space-y-2">
        {users.map(user => (
          <Card key={user.id}>
            <CardContent className="p-3">
              <div className="font-bold">{user.name}</div>
              <div className="text-sm text-muted-foreground">@{user.username}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
```

### Работа с Backend функциями poehali.dev

Если вы создали backend функцию в poehali.dev (папка `/backend`), вот как её использовать:

```tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function CallBackendExample() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const callBackend = async () => {
    setLoading(true);
    try {
      const response = await fetch('URL_ИЗ_func2url.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Id': 'user123',
        },
        body: JSON.stringify({ message: 'Привет!' }),
      });
      
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Ошибка:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={callBackend} disabled={loading}>
        {loading ? 'Загрузка...' : 'Вызвать функцию'}
      </Button>
      {data && <pre className="mt-4 p-4 bg-muted rounded">{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
```

**Где взять URL функции:**
1. Откройте файл `/backend/func2url.json` в корне проекта
2. Найдите вашу функцию и её URL
3. Используйте этот URL в `fetch()`

### Пагинация данных

Создайте файл `src/components/PaginatedList.tsx`:

```tsx
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PaginatedList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const postsPerPage = 5;

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}`)
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, [page]);

  return (
    <div>
      {loading ? (
        <div className="text-center">Загрузка...</div>
      ) : (
        <div className="space-y-4">
          {posts.map(post => (
            <Card key={post.id}>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground">{post.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="flex gap-2 justify-center mt-6">
        <Button 
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1 || loading}
        >
          Назад
        </Button>
        <span className="flex items-center px-4">Страница {page}</span>
        <Button 
          onClick={() => setPage(p => p + 1)}
          disabled={loading}
        >
          Вперёд
        </Button>
      </div>
    </div>
  );
}
```

### Кэширование данных (простой пример)

Создайте файл `src/hooks/useCache.ts`:

```tsx
import { useState, useEffect } from 'react';

export function useCachedFetch<T>(url: string, cacheKey: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem(cacheKey);
    
    if (cached) {
      setData(JSON.parse(cached));
      setLoading(false);
      return;
    }

    fetch(url)
      .then(response => response.json())
      .then(result => {
        setData(result);
        localStorage.setItem(cacheKey, JSON.stringify(result));
        setLoading(false);
      });
  }, [url, cacheKey]);

  return { data, loading };
}
```

**Использование:**
```tsx
import { useCachedFetch } from '@/hooks/useCache';

export default function CachedComponent() {
  const { data, loading } = useCachedFetch<User[]>(
    'https://jsonplaceholder.typicode.com/users',
    'users-cache'
  );

  if (loading) return <div>Загрузка...</div>;
  
  return <div>{/* Отображение данных */}</div>;
}
```

### Советы по работе с API:

1. **Всегда обрабатывайте ошибки** - используйте try/catch
2. **Показывайте состояние загрузки** - добавляйте loading индикаторы
3. **Используйте TypeScript типы** - определяйте интерфейсы для данных
4. **Debounce для поиска** - избегайте лишних запросов
5. **Кэшируйте данные** - используйте localStorage для часто запрашиваемых данных
6. **Backend функции** - проверяйте URL в `func2url.json`
7. **CORS**: При работе с backend всегда используйте кастомные заголовки (`X-User-Id`, `X-Auth-Token`)

---

Создано с помощью [poehali.dev](https://poehali.dev) - разработка сайтов через русский язык ✨