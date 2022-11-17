#version 450

layout(location = 0) out vec4 o_Target; // fragColor

layout(set = 1, binding = 0) uniform texture2D CustomMaterial_texture; // colorTexture
layout(set = 1, binding = 1) uniform sampler CustomMaterial_sampler; // positionTexture

void main() {
  // Must be odd.
  int pixelSize = 5;

  vec2 texSize = textureSize(CustomMaterial_texture, 0).xy;

  float x = int(gl_FragCoord.x) % pixelSize;
  float y = int(gl_FragCoord.y) % pixelSize;

  x = floor(pixelSize / 2.0) - x;
  y = floor(pixelSize / 2.0) - y;

  x = gl_FragCoord.x + x;
  y = gl_FragCoord.y + y;

  vec2 uv = vec2(x, y) / texSize;

  o_Target = texture(sampler2D(CustomMaterial_texture,CustomMaterial_sampler), uv);
}