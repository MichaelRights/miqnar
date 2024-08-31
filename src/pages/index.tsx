import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Grid, Typography } from "@mui/material";
import {
  IconBaselinePhone,
  IconLg,
  IconLocationFilled,
  IconMailSolid,
  IconSm,
} from "../icons";
import "../styles/index.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Box
        component="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={2}
        boxShadow="#00000040 0px 4px 4px"
        px={{
          lg: 24,
          md: 12,
          sm: 10,
        }}
        style={{ background: "#FFC700" }}
      >
        <Box display="flex" gap={5} alignItems="center">
          <IconSm />
          <h2>ՄԻՔՆԱՐ</h2>
        </Box>
        <Typography
          gap={1}
          display="flex"
          fontSize="20px"
          alignItems="center"
          variant="subtitle2"
          fontWeight="700"
        >
          <IconBaselinePhone />
          +374 93 38 23 84
        </Typography>
      </Box>
      <Box component="main" height="100%">
        <Grid container height="100%">
          <Grid
            item
            lg={6}
            p={2}
            md={6}
            display="flex"
            justifyContent="center"
            gap={5}
            flexDirection="column"
            alignItems="center"
          >
            <IconLg />
            <Typography
              maxWidth={600}
              textAlign="center"
              color="#333333"
              style={{ textWrap: "wrap" }}
              variant="body1"
            >
              "ՄԻՔՆԱՐ" ՍՊԸ-ն քաղաքաշինության բնագավառում իրականացնում է
              շինարարության որակի տեխնիկական հսկողություն։ Միաժամանակ
              իրականացնում է քաղաքաշինության գործունեության օբյեկտների
              հետախուզման և հետազննման ծառայություններ։
            </Typography>
          </Grid>
          <Grid item className="construction" lg={6} md={6} sm={0} />
        </Grid>
      </Box>
      <Box
        py={2}
        px={{
          lg: 24,
          md: 12,
          sm: 10,
        }}
        display="flex"
        alignItems="center"
        gap={10}
        style={{
          background: "#FFC700",
        }}
      >
        <IconSm />

        <Box display="flex" flexDirection="column">
          <Typography
            variant="body1"
            display="flex"
            fontSize="18px"
            component="a"
            href="mailto:miqnar@mail.ru"
            alignItems="self-end"
            gap={1}
          >
            <IconMailSolid />
            miqnar@mail.ru
          </Typography>
          <Typography
            gap={1}
            display="flex"
            alignItems="self-end"
            fontSize="18px"
            variant="subtitle2"
            fontWeight="700"
          >
            <IconLocationFilled /> ՀՀ Տավուշի մարզ ք․ Իջևան, Մետաղագործների Փ․
            /Տ/27Ա
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>ՄԻՔՆԱՐ</title>;
