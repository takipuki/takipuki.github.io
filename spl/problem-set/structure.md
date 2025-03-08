
# Structure

## 01 
```c
#include <stdio.h>

typedef struct {
    char name[20];
    char id[20];
    float cgpa;
} std;

int main() {
    std s;
    scanf("%[^\n]%*c", s.name);
    scanf("%[^\n]%*c", s.id);
    scanf("%f", &s.cgpa);

    printf("Name: %s\n", s.name);
    printf("Student ID: %s\n", s.id);
    printf("CGPA: %.2f\n", s.cgpa);
}
```


## 02 
```c
#include <stdio.h>

typedef struct {
    char name[20];
    char id[20];
    float cgpa;
} std;

int main() {
    int n; scanf("%d%*c", &n);
    std s[n];
    for (int i = 0; i < n; i++) {
        scanf("%[^\n]%*c", s[i].name);
        scanf("%[^\n]%*c", s[i].id);
        scanf("%f%*c", &s[i].cgpa);
    }

    for (int i = 0; i < n; i++) {
        printf("Student %d: %s\n", i+1, s[i].name);
        printf("Student ID: %s\n", s[i].id);
        printf("CGPA: %.2f\n", s[i].cgpa);
    }
}
```


## 03 
```c
#include <stdio.h>
#include <math.h>

typedef struct {
    int x, y;
} point;

int main() {
    point a, b;
    scanf("%d%d", &a.x, &a.y);
    scanf("%d%d", &b.x, &b.y);
    float dis = sqrt( (a.x-b.x)*(a.x-b.x) + (a.y-b.y)*(a.y-b.y) );
    printf("The distance is %.2f unit\n", dis);
}
```


## 04 
```c
#include <stdio.h>
#include <math.h>

typedef struct {
    int x, y;
} point;

float dis(point a, point b) {
    return sqrt( (a.x - b.x)*(a.x - b.x) + (a.y - b.y)*(a.y - b.y) );
}

int main() {
    point a, b, c;
    scanf("%d%d", &a.x, &a.y);
    scanf("%d%d", &b.x, &b.y);
    scanf("%d%d", &c.x, &c.y);
    float A = dis(b, c);
    float B = dis(c, a);
    float C = dis(a, b);
    if (A+B <= C || B+C <= A || C+A <= B) {
        puts("They are in the same line");
        return 0;
    }
    float s = (A+B+C) / 2;
    float area = sqrt( s*(s-A)*(s-B)*(s-C) );
    printf("The area is %.2f unit\n", area);
}
```


## 05 
```c
#include <stdio.h>

typedef struct {
    float real, img;
} complex;

int main() {
    complex c;
    scanf("%f%f", &c.real, &c.img);
    printf("%.2f%+.2fi\n", c.real, c.img);
}
```


## 06 
```c
#include <stdio.h>
#include <math.h>

typedef struct {
    float real, img;
} complex;

int main() {
    complex c;
    scanf("%f%f", &c.real, &c.img);

    float mod = sqrt( c.real*c.real + c.img*c.img );
    printf("Modulus = %.4f\n", mod);
    if (c.img*c.real < 0)
        printf("Argument = %.4f\n", 3.1416+atan(c.img/c.real));
    else
        printf("Argument = %.4f\n", atan(c.img/c.real));
}
```


## 07 
```c
#include <stdio.h>

typedef struct {
    int real, img;
} complex;

int main() {
    complex a, b;
    scanf("%d%d", &a.real, &a.img);
    scanf("%d%d", &b.real, &b.img);

    printf("(%d%+di)+(%d%+di)=%d%+di\n",
           a.real, a.img, b.real, b.img,
           a.real+b.real, a.img+b.img);
    
    printf("(%d%+di)-(%d%+di)=%d%+di\n",
           a.real, a.img, b.real, b.img,
           a.real-b.real, a.img-b.img);
}
```


## 08 
```c
#include <stdio.h>

typedef struct {
    int real, img;
} complex;

int main() {
    complex a, b;
    scanf("%d%d", &a.real, &a.img);
    scanf("%d%d", &b.real, &b.img);

    printf("(%d%+di)*(%d%+di)=%d%+di\n",
           a.real, a.img, b.real, b.img,
           (a.real*b.real)-(a.img*b.img),
           (a.real*b.img)+(a.img*b.real));
}
```


## 09 
```c
#include <stdio.h>

typedef struct {
    float real, img;
} complex;

complex mul(complex a, complex b) {
    return (complex) {
        (a.real*b.real)-(a.img*b.img),
        (a.real*b.img)+(a.img*b.real)
    };
}

complex conjugate(complex a) {
    return (complex) { a.real, -a.img };
}

complex div(complex a, complex b) {
    complex num = mul(a, conjugate(b));
    complex denom = mul(b, conjugate(b));
    return (complex) {
        num.real/denom.real, num.img/denom.real
    };
}

void print_complex(complex a) {
    printf("(%.2f%+.2fi)", a.real, a.img);
}

int main() {
    complex a, b;
    scanf("%f%f", &a.real, &a.img);
    scanf("%f%f", &b.real, &b.img);

    print_complex(a);
    putchar('/');
    print_complex(b);
    putchar('=');
    print_complex(div(a, b));
    putchar('\n');
}
```


## 10 
```c
#include <stdio.h>

typedef struct {
    int m, cm;
} length;

int main() {
    length l;
    scanf("%d%d", &l.m, &l.cm);
    printf("Length in meter: %.2f\n", l.m + (float)l.cm/100);
    printf("Length in centimeter: %d\n", l.m*100+l.cm);
}
```


## 11 
```c
#include <stdio.h>

typedef struct {
    int m, cm;
} length;

length add(length a, length b) {
    return (length) {
        (a.cm + b.cm >= 100) ? a.m + b.m + 1 : a.m + b.m,
        (a.cm + b.cm >= 100) ? (a.cm+b.cm)%100 : a.cm + b.cm
    };
}

int main() {
    length a, b;
    scanf("%d%d", &a.m, &a.cm);
    scanf("%d%d", &b.m, &b.cm);

    length c = add(a, b);
    printf("The sum is %d meter %d centimeter\n", c.m, c.cm);
}
```


## 12 
```c
#include <stdio.h>

typedef struct {
    int h, m, s;
} time;

float h(time t) {
    return t.h + (float)t.m/60 + (float)t.s/3600;
}

float m(time t) {
    return t.h*60 + t.m + (float)t.s/60;
}

int s(time t) {
    return t.h*3600 + t.m*60 + t.s;
}

int main() {
    time t;
    scanf("%d%d%d", &t.h, &t.m, &t.s);

    printf("Time interval in hour: %.2f\n", h(t));
    printf("Time interval in minute: %.2f\n", m(t));
    printf("Time interval in second: %d\n", s(t));
}
```


## 13 
```c
#include <stdio.h>

typedef struct {
    int h, m, s;
} time;

time sub(time a, time b) {
    time t = {
        a.h - b.h,
        a.m - b.m,
        a.s - b.s
    };
    if (t.s < 0) {
        t.s += 60;
        t.m -= 1;
    }
    if (t.m < 0) {
        t.m += 60;
        t.h -= 1;
    }
    return t;
}

int main() {
    time a, b;
    scanf("%d%d%d", &a.h, &a.m, &a.s);
    scanf("%d%d%d", &b.h, &b.m, &b.s);

    time c = sub(a, b);
    printf("%d %d %d\n", c.h, c.m, c.s);
}
```

