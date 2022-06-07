/*
 * Tencent is pleased to support the open source community by making TMagicEditor available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';

import { MComponent } from '@tmagic/schema';

import useApp from '../useApp';

interface ImgProps {
  config: {
    url: string;
    src: string;
  } & MComponent;
}

const Img: React.FC<ImgProps> = ({ config }) => {
  const { app } = useApp({ config });

  if (!app) return null;

  const clickHandler = () => {
    if (config.url) window.location.href = config.url;
  };

  return (
    <img
      className="magic-ui-img"
      style={app.transformStyle(config.style || {})}
      id={`${config.id}`}
      src={config.src}
      onClick={clickHandler}
    />
  );
};

Img.displayName = 'magic-ui-img';

export default Img;
