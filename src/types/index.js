"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSTORE2__factory =
  exports.Ownable__factory =
  exports.IExquisiteGraphics__factory =
  exports.IERC721Receiver__factory =
  exports.IERC721Metadata__factory =
  exports.IERC721__factory =
  exports.IERC165__factory =
  exports.IBase64__factory =
  exports.ERC721Burnable__factory =
  exports.ERC721__factory =
  exports.ERC165__factory =
  exports.DailyCanvas__factory =
  exports.Bytecode__factory =
  exports.factories =
    void 0;
exports.factories = __importStar(require("./factories"));
var Bytecode__factory_1 = require("./factories/Bytecode__factory");
Object.defineProperty(exports, "Bytecode__factory", {
  enumerable: true,
  get: function () {
    return Bytecode__factory_1.Bytecode__factory;
  },
});
var DailyCanvas__factory_1 = require("./factories/DailyCanvas__factory");
Object.defineProperty(exports, "DailyCanvas__factory", {
  enumerable: true,
  get: function () {
    return DailyCanvas__factory_1.DailyCanvas__factory;
  },
});
var ERC165__factory_1 = require("./factories/ERC165__factory");
Object.defineProperty(exports, "ERC165__factory", {
  enumerable: true,
  get: function () {
    return ERC165__factory_1.ERC165__factory;
  },
});
var ERC721__factory_1 = require("./factories/ERC721__factory");
Object.defineProperty(exports, "ERC721__factory", {
  enumerable: true,
  get: function () {
    return ERC721__factory_1.ERC721__factory;
  },
});
var ERC721Burnable__factory_1 = require("./factories/ERC721Burnable__factory");
Object.defineProperty(exports, "ERC721Burnable__factory", {
  enumerable: true,
  get: function () {
    return ERC721Burnable__factory_1.ERC721Burnable__factory;
  },
});
var IBase64__factory_1 = require("./factories/IBase64__factory");
Object.defineProperty(exports, "IBase64__factory", {
  enumerable: true,
  get: function () {
    return IBase64__factory_1.IBase64__factory;
  },
});
var IERC165__factory_1 = require("./factories/IERC165__factory");
Object.defineProperty(exports, "IERC165__factory", {
  enumerable: true,
  get: function () {
    return IERC165__factory_1.IERC165__factory;
  },
});
var IERC721__factory_1 = require("./factories/IERC721__factory");
Object.defineProperty(exports, "IERC721__factory", {
  enumerable: true,
  get: function () {
    return IERC721__factory_1.IERC721__factory;
  },
});
var IERC721Metadata__factory_1 = require("./factories/IERC721Metadata__factory");
Object.defineProperty(exports, "IERC721Metadata__factory", {
  enumerable: true,
  get: function () {
    return IERC721Metadata__factory_1.IERC721Metadata__factory;
  },
});
var IERC721Receiver__factory_1 = require("./factories/IERC721Receiver__factory");
Object.defineProperty(exports, "IERC721Receiver__factory", {
  enumerable: true,
  get: function () {
    return IERC721Receiver__factory_1.IERC721Receiver__factory;
  },
});
var IExquisiteGraphics__factory_1 = require("./factories/IExquisiteGraphics__factory");
Object.defineProperty(exports, "IExquisiteGraphics__factory", {
  enumerable: true,
  get: function () {
    return IExquisiteGraphics__factory_1.IExquisiteGraphics__factory;
  },
});
var Ownable__factory_1 = require("./factories/Ownable__factory");
Object.defineProperty(exports, "Ownable__factory", {
  enumerable: true,
  get: function () {
    return Ownable__factory_1.Ownable__factory;
  },
});
var SSTORE2__factory_1 = require("./factories/SSTORE2__factory");
Object.defineProperty(exports, "SSTORE2__factory", {
  enumerable: true,
  get: function () {
    return SSTORE2__factory_1.SSTORE2__factory;
  },
});