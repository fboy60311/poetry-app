#!/usr/bin/env python3
# 从 chinese-poetry 数据集裁剪出适合手表的精简诗词库，输出 src/data/poems.js（ES module）
# 用法：
#   1. git clone https://github.com/chinese-poetry/chinese-poetry
#   2. python scripts/crop_data.py --src <chinese-poetry 目录> --out src/data/poems.js --limit 800
import argparse
import json
import os


def load_tang(src):
    out = []
    base = os.path.join(src, 'json')
    if not os.path.isdir(base):
        return out
    for fn in sorted(os.listdir(base)):
        if not fn.endswith('.json'):
            continue
        with open(os.path.join(base, fn), encoding='utf-8') as f:
            for rec in json.load(f):
                paragraphs = rec.get('paragraphs') or []
                content = ''.join(paragraphs)
                if not content:
                    continue
                out.append({
                    'title': rec.get('title', ''),
                    'author': rec.get('author', '佚名'),
                    'dynasty': '唐',
                    'content': content,
                    'note': ''
                })
    return out


def load_song(src):
    out = []
    base = os.path.join(src, 'ci')
    if not os.path.isdir(base):
        return out
    for fn in sorted(os.listdir(base)):
        if not fn.endswith('.json'):
            continue
        with open(os.path.join(base, fn), encoding='utf-8') as f:
            for rec in json.load(f):
                paragraphs = rec.get('paragraphs') or []
                content = ''.join(paragraphs)
                if not content:
                    continue
                out.append({
                    'title': rec.get('name', rec.get('title', '')),
                    'author': rec.get('author', '佚名'),
                    'dynasty': '宋',
                    'content': content,
                    'note': ''
                })
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--src', required=True, help='chinese-poetry 仓库根目录')
    ap.add_argument('--out', required=True, help='输出 poems.js 路径')
    ap.add_argument('--limit', type=int, default=800)
    a = ap.parse_args()

    data = load_tang(a.src) + load_song(a.src)
    seen, result = set(), []
    for p in data:
        key = (p['title'], p['author'])
        if key in seen:
            continue
        seen.add(key)
        if len(p['content']) > 200:
            p['content'] = p['content'][:200] + '…'
        result.append(p)
    result = result[:a.limit]
    for i, p in enumerate(result, 1):
        p['id'] = i

    os.makedirs(os.path.dirname(a.out), exist_ok=True)
    with open(a.out, 'w', encoding='utf-8') as f:
        f.write('// 由 scripts/crop_data.py 自动生成，请勿手动编辑\n')
        f.write('const poems = ')
        json.dump(result, f, ensure_ascii=False, indent=2)
        f.write('\nexport default poems\n')
    print(f'已生成 {len(result)} 首 -> {a.out}')


if __name__ == '__main__':
    main()
