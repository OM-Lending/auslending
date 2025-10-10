const fs = require("fs");
const path = require("path");

const assetsDir = path.join(__dirname, "src", "assets");
const imageExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".JPG",
  ".JPEG",
];

console.log("🔍 检查图片大小...\n");
console.log("=".repeat(80));
console.log("文件名".padEnd(40) + "大小".padEnd(15) + "状态");
console.log("=".repeat(80));

let totalSize = 0;
let largeImages = [];
let imageCount = 0;

try {
  const files = fs.readdirSync(assetsDir);

  files.forEach((file) => {
    const ext = path.extname(file);
    if (imageExtensions.includes(ext)) {
      const filePath = path.join(assetsDir, file);
      const stats = fs.statSync(filePath);
      const sizeInKB = (stats.size / 1024).toFixed(2);
      const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);

      totalSize += stats.size;
      imageCount++;

      let status = "✅ 良好";
      let sizeDisplay = `${sizeInKB} KB`;

      if (stats.size > 1024 * 1024) {
        // > 1MB
        status = "❌ 太大";
        sizeDisplay = `${sizeInMB} MB`;
        largeImages.push({ file, size: sizeInMB + " MB" });
      } else if (stats.size > 200 * 1024) {
        // > 200KB
        status = "⚠️  较大";
        largeImages.push({ file, size: sizeInKB + " KB" });
      }

      console.log(file.padEnd(40) + sizeDisplay.padEnd(15) + status);
    }
  });

  console.log("=".repeat(80));
  console.log(`\n📊 统计信息:`);
  console.log(`   总图片数: ${imageCount}`);
  console.log(`   总大小: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`   平均大小: ${(totalSize / imageCount / 1024).toFixed(2)} KB`);

  if (largeImages.length > 0) {
    console.log(`\n⚠️  需要优化的图片 (${largeImages.length}个):`);
    largeImages.forEach((img) => {
      console.log(`   - ${img.file} (${img.size})`);
    });

    console.log("\n💡 优化建议:");
    console.log("   1. 访问 https://tinypng.com/ 压缩图片");
    console.log("   2. 目标: 背景图 < 200KB, 卡片图 < 100KB");
    console.log("   3. 考虑转换为 WebP 格式");
  } else {
    console.log("\n✅ 所有图片大小都很合适！");
  }
} catch (error) {
  console.error("❌ 错误:", error.message);
}

console.log("\n");
