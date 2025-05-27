// 이미지 불러오기, 픽셀 데이터 추출
import sharp from 'sharp';

type ImageData = {
    width: number;
    height: number;
    pixels: Uint8ClampedArray;
};

export const loadImage = async (
    filePath: string,
    width: number,
    height: number,
): Promise<ImageData> => {
    const buffer = await sharp(filePath)
        .resize(width, height, { fit: 'fill' })
        .greyscale()
        .ensureAlpha() // 투명도 추가
        .raw() // raw() 를 통해 1픽셀 -> RGB 쪼갬
        .toBuffer();

    return {
        width: width || 0,
        height: height || 0,
        pixels: new Uint8ClampedArray(buffer),
    };
};
