# 图片优化指南

## 🚀 已实施的优化

### 1. 懒加载组件（OptimizedImage）

已创建 `OptimizedImage` 组件，提供以下功能：

- ✅ 原生懒加载（loading="lazy"）
- ✅ 图片加载占位符（shimmer 效果）
- ✅ 加载动画和淡入效果
- ✅ 自动检测图片加载状态

### 使用方法

```jsx
import OptimizedImage from "../components/OptimizedImage";

<OptimizedImage
  src={imageUrl}
  alt="描述"
  className="img-fluid shadow-lg"
  style={{ width: "100%", height: "300px" }}
/>;
```

## 📦 推荐的图片压缩工具

### 在线工具（免费）

1. **TinyPNG** (https://tinypng.com/)

   - 支持 PNG 和 JPEG
   - 无损压缩
   - 建议压缩率：60-80%

2. **Squoosh** (https://squoosh.app/)

   - Google 开发
   - 支持 WebP 转换
   - 实时预览

3. **Compressor.io** (https://compressor.io/)
   - 支持多种格式
   - 压缩率可达 90%

### NPM 工具（自动化）

```bash
npm install --save-dev imagemin imagemin-mozjpeg imagemin-pngquant
```

## 🎯 图片优化标准

### 当前项目图片规格建议

| 用途      | 尺寸      | 格式     | 质量 | 文件大小 |
| --------- | --------- | -------- | ---- | -------- |
| Hero 背景 | 1920x1080 | JPG/WebP | 75%  | < 200KB  |
| 卡片图片  | 800x600   | JPG/WebP | 80%  | < 100KB  |
| Logo      | 原始      | PNG      | 100% | < 50KB   |
| 缩略图    | 400x300   | JPG      | 70%  | < 50KB   |

### 压缩步骤

1. **批量重命名图片**（可选）

   ```bash
   # 在assets文件夹中
   cd src/assets
   ```

2. **使用 TinyPNG 压缩**

   - 访问 https://tinypng.com/
   - 拖入所有 JPG 和 PNG 图片
   - 下载压缩后的图片
   - 替换原文件

3. **转换为 WebP 格式**（推荐）

   ```bash
   # 安装工具
   npm install -g webp-converter

   # 批量转换
   cwebp -q 80 input.jpg -o output.webp
   ```

## 🔧 其他优化建议

### 1. 使用 CDN

将图片上传至 CDN 服务：

- Cloudinary
- AWS S3 + CloudFront
- Vercel Image Optimization

### 2. 响应式图片

```jsx
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <source srcSet="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="描述" />
</picture>
```

### 3. 图片尺寸优化

```jsx
<img
  srcSet="
    image-400w.jpg 400w,
    image-800w.jpg 800w,
    image-1200w.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
  src="image-800w.jpg"
  alt="描述"
/>
```

## 📊 性能检测

### 工具

1. **Chrome DevTools**

   - Network 面板查看图片加载时间
   - Lighthouse 性能测试

2. **PageSpeed Insights**

   - https://pagespeed.web.dev/

3. **GTmetrix**
   - https://gtmetrix.com/

## ✅ 优化检查清单

- [ ] 所有图片已压缩（< 200KB）
- [ ] Hero 图片使用 WebP 格式
- [ ] 卡片图片使用懒加载
- [ ] 添加图片 alt 属性（SEO）
- [ ] 测试移动端加载速度
- [ ] 使用 OptimizedImage 组件
- [ ] 配置浏览器缓存

## 🚀 快速开始

1. **立即优化现有图片**

   ```bash
   # 进入assets目录
   cd src/assets

   # 备份原图片
   mkdir original_backup
   cp *.jpg *.png *.jpeg original_backup/

   # 使用TinyPNG在线压缩所有图片
   # 下载后替换原文件
   ```

2. **更新组件使用 OptimizedImage**
   在需要优化的页面导入并使用新组件。

3. **测试性能**
   ```bash
   npm run build
   # 测试生产环境性能
   ```

## 📝 注意事项

- ⚠️ 始终保留原始图片备份
- ⚠️ 压缩后检查图片质量
- ⚠️ Hero 背景图优先优化（影响最大）
- ⚠️ 考虑使用 WebP 格式（Chrome、Edge 支持）
